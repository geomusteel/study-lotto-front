import React, { useEffect, useState } from 'react';
import * as S from './RoundBody.style';
import axios from 'axios';
import { useAppSelector } from '../../../hooks';
import { colorSetting } from '../../../utilize/generateLottoNumbers';

interface Round {
  drwNo: number;
  totSellamnt: number;
  drwNoDate: Date;
  firstWinamnt: number;
  firstPrzwnerCo: number;
  firstAccumamnt: number;
  drwtNo1: { number: number; color: string };
  drwtNo2: { number: number; color: string };
  drwtNo3: { number: number; color: string };
  drwtNo4: { number: number; color: string };
  drwtNo5: { number: number; color: string };
  drwtNo6: { number: number; color: string };
  bnusNo: { number: number; color: string };
}

const InitialData: Round = {
  drwNo: 0,
  totSellamnt: 0,
  drwNoDate: new Date(),
  firstWinamnt: 0,
  firstPrzwnerCo: 0,
  firstAccumamnt: 0,
  drwtNo1: { number: 0, color: '#f3f5f6' },
  drwtNo2: { number: 0, color: '#f3f5f6' },
  drwtNo3: { number: 0, color: '#f3f5f6' },
  drwtNo4: { number: 0, color: '#f3f5f6' },
  drwtNo5: { number: 0, color: '#f3f5f6' },
  drwtNo6: { number: 0, color: '#f3f5f6' },
  bnusNo: { number: 0, color: '#f3f5f6' },
};

const RoundBody = () => {
  const lottoNumber = useAppSelector((state) => state.lottoNumber.currentDraw);
  const [temp, setTemp] = useState<Round>(InitialData);

  const getRoundData = (roundDate: number) => {
    axios
      .get('http://localhost:3030/lotto/round?roundNumber=' + (roundDate - 1))
      .then((response) => {
        const data = response.data;
        data.drwNoDate = new Date(data.drwNoDate);
        data.drwtNo1 = {
          number: data.drwtNo1,
          color: colorSetting(data.drwtNo1),
        };
        data.drwtNo2 = {
          number: data.drwtNo2,
          color: colorSetting(data.drwtNo2),
        };
        data.drwtNo3 = {
          number: data.drwtNo3,
          color: colorSetting(data.drwtNo3),
        };
        data.drwtNo4 = {
          number: data.drwtNo4,
          color: colorSetting(data.drwtNo4),
        };
        data.drwtNo5 = {
          number: data.drwtNo5,
          color: colorSetting(data.drwtNo5),
        };
        data.drwtNo6 = {
          number: data.drwtNo6,
          color: colorSetting(data.drwtNo6),
        };
        data.bnusNo = {
          number: data.bnusNo,
          color: colorSetting(data.bnusNo),
        };
        data.firstAccumamnt = parseInt(data.firstAccumamnt);
        data.firstWinamnt = parseInt(data.firstWinamnt);
        data.totSellamnt = parseInt(data.totSellamnt);
        setTemp(response.data);
      });
  };

  useEffect(() => {
    getRoundData(lottoNumber);
  }, [lottoNumber]);

  return (
    <S.Layout>
      <S.ContainerRoundSelect>
        <S.ParagraphRoundHeader>{temp.drwNo + '회차'}</S.ParagraphRoundHeader>
        <S.ParagraphRoundDate>
          {`${temp.drwNoDate.getFullYear()}년 ${temp.drwNoDate.getMonth()}월 ${temp.drwNoDate.getDay()}일`}
        </S.ParagraphRoundDate>
      </S.ContainerRoundSelect>
      <S.ContainerNumber>
        <S.BoxRoundNumber $color={temp.drwtNo1.color}>
          {temp.drwtNo1.number}
        </S.BoxRoundNumber>
        <S.BoxRoundNumber $color={temp.drwtNo2.color}>
          {temp.drwtNo2.number}
        </S.BoxRoundNumber>
        <S.BoxRoundNumber $color={temp.drwtNo3.color}>
          {temp.drwtNo3.number}
        </S.BoxRoundNumber>
        <S.BoxRoundNumber $color={temp.drwtNo4.color}>
          {temp.drwtNo4.number}
        </S.BoxRoundNumber>
        <S.BoxRoundNumber $color={temp.drwtNo5.color}>
          {temp.drwtNo5.number}
        </S.BoxRoundNumber>
        <S.BoxRoundNumber $color={temp.drwtNo6.color}>
          {temp.drwtNo6.number}
        </S.BoxRoundNumber>
        <S.ParagraphPlus>+</S.ParagraphPlus>
        <S.BoxRoundNumber $color={temp.bnusNo.color}>
          {temp.bnusNo.number}
        </S.BoxRoundNumber>
      </S.ContainerNumber>
      <S.Table>
        <tbody>
          <tr>
            <S.Td $header={true}>1등 총 당첨금액</S.Td>
            <S.Td $pointColor={true}>
              {temp.firstAccumamnt.toLocaleString() + '원'}
            </S.Td>
          </tr>
          <tr>
            <S.Td $header={true}>당첨 게임 수</S.Td>
            <S.Td>{temp.firstPrzwnerCo}</S.Td>
          </tr>
          <tr>
            <S.Td $header={true}>1게임당 당첨금액</S.Td>
            <S.Td>{temp.firstWinamnt.toLocaleString() + '원'}</S.Td>
          </tr>
        </tbody>
      </S.Table>
    </S.Layout>
  );
};

export default RoundBody;
