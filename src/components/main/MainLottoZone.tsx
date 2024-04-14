import React, { useEffect, useState } from 'react';
import LottoNumber from './main-sub-components/LottoNumber';
import { useAppSelector } from '../../hooks';
import * as S from './MainLottoZone.style';
import { useDispatch } from 'react-redux';
import {
  resetMainLottoNumber,
  setMainLottoNumberAll,
} from '../../slice/LottoNumberSlice';

const MainLottoZone = () => {
  const lottoNumbers = useAppSelector(
    (state) => state.lottoNumber.lottoNumbers,
  );

  const [currentLottoDraw, setCurrentLottoDraw] = useState<number>(0);

  const dispatch = useDispatch();
  const handleGenerate = () => {
    dispatch(setMainLottoNumberAll());
  };
  const handleReset = () => {
    dispatch(resetMainLottoNumber());
  };

  useEffect(() => {
    const calculateLottoDraw = () => {
      const startDate = new Date(2002, 11, 7);
      const currentDate = new Date();
      const differenceInTime = currentDate.getTime() - startDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      const currentDraw = Math.floor(differenceInDays / 7) + 1;
      setCurrentLottoDraw(currentDraw + 1);
    };

    calculateLottoDraw();
  }, []);

  return (
    <S.Layout>
      <S.ParagraphHeader>{currentLottoDraw} 회차</S.ParagraphHeader>
      {lottoNumbers.map((item, index) => {
        return <LottoNumber key={index} id={index} lottoNumber={item} />;
      })}
      <S.ContainerButton>
        <S.Button>번호저장</S.Button>
        <S.Button onClick={() => handleReset()}>초기화</S.Button>
        <S.Button onClick={() => handleGenerate()} color={'#ff6600'}>
          전체생성
        </S.Button>
      </S.ContainerButton>
    </S.Layout>
  );
};

export default MainLottoZone;
