import React, { useEffect, useState } from 'react';
import { TimeParts } from '../../common/interface';
import * as S from './AvailableTimeCounter.style';

const initialData: TimeParts = {
  days: '0',
  hours: ['0', '0'],
  minutes: ['0', '0'],
  seconds: ['0', '0'],
};

const AvailableTimeCounter = () => {
  const [remainingTime, setRemainingTime] = useState<TimeParts>(initialData);

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      // 이번 주의 시작
      const weekStart = new Date(now);
      // 이번 주의 끝
      const weekEnd = new Date(now);

      // 이번 주 일요일 오전 6시로 설정
      weekStart.setDate(now.getDate() - now.getDay());
      weekStart.setHours(6, 0, 0, 0);

      // 이번 주 토요일 오후 7시 59분 59초로 설정
      weekEnd.setDate(now.getDate() + (6 - now.getDay()));
      weekEnd.setHours(19, 59, 59, 999);

      if (now >= weekStart && now <= weekEnd) {
        // 현재 시간이 구매 가능 시간 내에 있음
        let timeDiff = weekEnd.getTime() - now.getTime();

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(1, '0');
        timeDiff -= parseInt(days) * (1000 * 60 * 60 * 24);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, '0')
          .split('');
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60)
          .toString()
          .padStart(2, '0')
          .split('');
        const seconds = Math.floor((timeDiff / 1000) % 60)
          .toString()
          .padStart(2, '0')
          .split('');

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // 구매 불가능 시간
        setRemainingTime(initialData);
      }
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Layout>
      <S.BoxCounter>로또구매가능시간</S.BoxCounter>
      <div style={{ width: '16px' }}></div>
      <S.BoxCounter>{remainingTime.days}</S.BoxCounter>
      <S.BoxColon>:</S.BoxColon>
      <S.BoxCounter>{remainingTime.hours[0]}</S.BoxCounter>
      <S.BoxCounter>{remainingTime.hours[1]}</S.BoxCounter>
      <S.BoxColon>:</S.BoxColon>
      <S.BoxCounter>{remainingTime.minutes[0]}</S.BoxCounter>
      <S.BoxCounter>{remainingTime.minutes[1]}</S.BoxCounter>
      <S.BoxColon>:</S.BoxColon>
      <S.BoxCounter>{remainingTime.seconds[0]}</S.BoxCounter>
      <S.BoxCounter>{remainingTime.seconds[1]}</S.BoxCounter>
    </S.Layout>
  );
};

export default AvailableTimeCounter;
