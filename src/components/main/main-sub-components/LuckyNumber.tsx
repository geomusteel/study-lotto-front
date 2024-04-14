import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { luckyNumberOpen } from '../../../slice/LottoNumberSlice';
import { Lotto } from '../../../common/interface';
import * as S from './LuckyNumber.style';

const LuckyNumber = () => {
  const dispatch = useAppDispatch();
  const lottoNumber = useAppSelector((state) => state.lottoNumber.luckyNumber);

  const handleIsOpenChange = (item: Lotto) => {
    dispatch(luckyNumberOpen(item));
  };

  return (
    <S.Layout>
      {lottoNumber.map((item, index) => {
        return (
          <S.BoxRoundNumber
            key={index}
            $color={item.color}
            $isOpen={item.isOpen}
            onClick={() => handleIsOpenChange(item)}
          >
            {item.isOpen && item.number}
          </S.BoxRoundNumber>
        );
      })}
    </S.Layout>
  );
};

export default LuckyNumber;
