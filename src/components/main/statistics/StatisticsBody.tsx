import React, { useEffect, useState } from 'react';
import * as S from './StatisticsBody.style';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import axios from 'axios';
import { findMinMax } from '../../../utilize/findMinMax';

// 필요한 ECharts 컴포넌트 등록
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

interface BarChartParams {
  dataIndex: number; // 데이터 인덱스
  data: number; // 데이터 값
  seriesIndex?: number; // 시리즈 인덱스 (필요에 따라 추가)
}

interface MinData {
  min: [string, number];
}

interface MaxData {
  max: [string, number];
}

const StatisticsBody = () => {
  const [statisticData, setStatisticData] = useState<[string, number][]>([]);
  const [statisticRange, setStatisticRange] = useState<number[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAscending, setIsAscending] = useState(true);
  const [tempBoolean] = useState(false);
  const [minData, setMinData] = useState<MinData>({ min: ['0', 0] });
  const [maxData, setMaxData] = useState<MaxData>({ max: ['0', 0] });

  const handleAscending = () => {
    setIsAscending((prevState) => !prevState);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    axios
      .get<{ [key: string]: number }>('http://localhost:3030/lotto/draws')
      .then((response) => {
        const entries = Object.entries(response.data);
        setStatisticData(entries);
        const { min, max } = findMinMax(entries);
        setMinData({ min });
        setMaxData({ max });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get<number[]>('http://localhost:3030/lotto/draws-range')
      .then((response) => {
        setStatisticRange(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let keys: string[];
  let values: number[];

  if (isAscending) {
    keys = statisticData.map((item) => item[0]).reverse();
    values = statisticData.map((item) => item[1]).reverse();
  } else {
    const sort = [...statisticData].sort((a, b) => a[1] - b[1]);
    keys = sort.map((item) => item[0]);
    values = sort.map((item) => item[1]);
  }

  const option1: echarts.EChartsCoreOption = {
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: keys,
      axisLabel: {
        fontSize: 14, // 폰트 사이즈를 16px로 설정
        fontWeight: 600,
        color: '#333', // 레이블의 색상 설정 (선택적)
      },
    },
    series: [
      {
        data: values,
        type: 'bar',
        label: {
          show: true,
          position: 'insideLeft',
          color: '#ffffff', // 텍스트 색상
          formatter: '{c}', // 데이터 값 형식
          fontSize: 12, // 폰트 사이즈를 14px로 설정
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
        itemStyle: {
          // 바 색상을 데이터에 따라 동적으로 설정
          color: function (params: BarChartParams) {
            const number = parseInt(keys[params.dataIndex]);
            if (number <= 10) {
              return '#f2b526';
            } else if (number <= 20) {
              return '#3d74ad';
            } else if (number <= 30) {
              return '#de4c10';
            } else if (number <= 40) {
              return '#9295a4';
            } else {
              return '#2eaa62';
            }
          },
        },
      },
    ],
  };

  const option2: echarts.EChartsCoreOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: statisticRange[0], name: '1~10' },
          { value: statisticRange[1], name: '11~20' },
          { value: statisticRange[2], name: '21~30' },
          { value: statisticRange[3], name: '31~40' },
          { value: statisticRange[4], name: '41~45' },
        ],
      },
    ],
  };

  return (
    <S.Layout>
      {tempBoolean ? (
        <>
          <S.Container>
            <S.BoxMinMax>{`최다번호 : ${maxData.max[0]} (${maxData.max[1]}회)`}</S.BoxMinMax>
            <S.BoxMinMax>{`최소번호 : ${minData.min[0]} (${minData.min[1]}회)`}</S.BoxMinMax>
            <S.Button onClick={() => handleAscending()}>
              {isAscending ? '번호순' : '당첨순'}
            </S.Button>
          </S.Container>
          <ReactECharts
            option={option1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '1600px',
              width: '550px',
              marginLeft: '20px',
            }}
          />
        </>
      ) : (
        <>
          <S.Container>
            <S.Button>당첨순</S.Button>
          </S.Container>
          <ReactECharts
            option={option2}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '600px',
              width: '550px',
              marginTop: '20px',
            }}
          />
        </>
      )}
    </S.Layout>
  );
};

export default StatisticsBody;
