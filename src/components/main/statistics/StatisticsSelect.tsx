import React, { useState } from 'react';
import * as S from './StatisticsSelect.style';

const StatisticsSelect = () => {
  const [isSelect, setIsSelect] = useState(true);

  const handleOnclick = () => {
    setIsSelect(!isSelect);
  };

  return (
    <S.Layout>
      <S.BoxSelect onClick={() => handleOnclick()} $isSelect={isSelect}>
        번호별 당첨 통계
      </S.BoxSelect>
      <S.BoxSelect onClick={() => handleOnclick()} $isSelect={!isSelect}>
        구간별 당첨 통계
      </S.BoxSelect>
    </S.Layout>
  );
};

export default StatisticsSelect;
