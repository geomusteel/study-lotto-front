import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeManualNumber } from '../../../slice/LottoNumberSlice';
import * as S from './ManualNumber.style';

const BaseLuckyNumberGroup = () => {
  const dispatch = useAppDispatch();
  const lottoNumber = useAppSelector((state) => state.lottoNumber.manualNumber);

  /**
   * 중복값이 있을경우 초기화
   */
  const validate = (index: number, newNumber: number) => {
    const isDuplicate = lottoNumber.some(
      (item, itemIndex) => item.number === newNumber && itemIndex !== index,
    );

    if (isDuplicate && newNumber !== 0) {
      dispatch(changeManualNumber({ index, number: 0 }));
    }
  };

  /**
   * input 변경사항을 반영 <br>
   * 중복값 체크는 하지 않음
   */
  const handleIsManualNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    const newNumber = Number(value);
    const isNumber = /^[0-9]+$/;
    if (value === '') {
      dispatch(changeManualNumber({ index, number: 0 }));
    } else if (isNumber.test(value) && newNumber <= 45) {
      dispatch(changeManualNumber({ index, number: newNumber }));
    }
  };

  /**
   * input 에서 focus out 됐을때 <br>
   * 중복값 있을경우 제거
   */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const newNumber = Number(e.target.value);
    validate(index, newNumber);
  };

  /**
   * input 에서 Enter 됐을때 <br>
   * 중복값 있을경우 제거
   */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      const newNumber = Number(e.currentTarget.value);
      validate(index, newNumber);
    }
  };

  return (
    <S.Layout>
      {lottoNumber.map((item, index) => {
        return (
          <S.Wrapper key={index} $color={item.color} $isOpen={item.isOpen}>
            <S.Input
              $color={item.number === 0 ? '#f3f5f6' : item.color}
              value={item.number === 0 ? '' : item.number}
              type={'text'}
              maxLength={2}
              onChange={(e) => handleIsManualNumber(e, index)}
              onBlur={(e) => handleBlur(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            ></S.Input>
          </S.Wrapper>
        );
      })}
    </S.Layout>
  );
};

export default BaseLuckyNumberGroup;
