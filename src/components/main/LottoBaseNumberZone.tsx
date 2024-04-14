import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeIsLuckyNumber,
  resetBaseNumber,
} from '../../slice/LottoNumberSlice';
import LuckyNumber from './main-sub-components/LuckyNumber';
import BaseManualNumberGroup from './main-sub-components/ManualNumber';
import * as S from './LottoBaseNumberZone.style';

const LottoBaseNumberZone = () => {
  const isLuckyNumber = useAppSelector(
    (state) => state.lottoNumber.isLuckyNumber,
  );

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(resetBaseNumber());
  };

  const handleIsLuckyNumber = () => {
    dispatch(changeIsLuckyNumber());
  };

  return (
    <S.Layout>
      <S.Container>
        <S.ContainerIndicator onClick={() => handleIsLuckyNumber()}>
          <S.BoxIndicator $isCheck={isLuckyNumber} />
          <S.BoxIndicator $isCheck={!isLuckyNumber} />
        </S.ContainerIndicator>
        <S.ContainerNumberType>
          <S.ContainerNumberTypeSub>
            <S.ContainerNumberTypeText onClick={() => handleIsLuckyNumber()}>
              <S.ParagraphTop>
                {isLuckyNumber ? 'LUCKY' : 'MANUAL'}
              </S.ParagraphTop>
              <S.ParagraphBottom>NUMBER</S.ParagraphBottom>
            </S.ContainerNumberTypeText>
            {isLuckyNumber ? <LuckyNumber /> : <BaseManualNumberGroup />}
          </S.ContainerNumberTypeSub>
        </S.ContainerNumberType>
      </S.Container>
      <S.BoxRight>
        <S.Button onClick={() => handleOnClick()}>RESET</S.Button>
      </S.BoxRight>
    </S.Layout>
  );
};

export default LottoBaseNumberZone;
