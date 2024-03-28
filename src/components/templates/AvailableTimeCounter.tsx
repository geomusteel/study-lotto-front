import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"
import CounterSquareBox from "../atoms/box/CounterSquareBox";
import Colon from "../atoms/box/Colon";


interface TimeParts {
    days: string;
    hours: string[];
    minutes: string[];
    seconds: string[];
}

const initialData : TimeParts = {
    days: "0",
    hours: ["0","0"],
    minutes: ["0","0"],
    seconds: ["0","0"],
}

const Wrapper = styled(FlexCenterDivision)`
    height: 88px;
    width: 580px;
    box-sizing: border-box;
    border-top: 1px solid #d8d8d8;
    background-color: #f3f5f6;
    gap: 8px;
`

const AvailableTimeCounter = () => {

    const [remainingTime, setRemainingTime] = useState<TimeParts>(initialData);

    useEffect(() => {
        const updateRemainingTime = () => {
            const now = new Date();
            const dayOfWeek = now.getDay();
            const endTime = new Date();

            if (dayOfWeek >= 0 && dayOfWeek <= 4) {
                endTime.setHours(23, 59, 59);
            } else if (dayOfWeek === 5) {
                endTime.setHours(19, 59, 59);
            } else {
                setRemainingTime(initialData); // 구매 불가능 시간
                return;
            }

            let timeDiff = endTime.getTime() - now.getTime();
            if (timeDiff < 0) {
                setRemainingTime(initialData); // 구매 불가능 시간
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(1, '0');
            timeDiff -= parseInt(days) * (1000 * 60 * 60 * 24);
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0').split('');
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60).toString().padStart(2, '0').split('');
            const seconds = Math.floor((timeDiff / 1000) % 60).toString().padStart(2, '0').split('');

            setRemainingTime({days, hours, minutes, seconds});
        };

        updateRemainingTime();
        const interval = setInterval(updateRemainingTime, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Wrapper>
            <CounterSquareBox>로또구매가능시간</CounterSquareBox>
            <div style={{width: "16px"}}></div>
            <CounterSquareBox>{remainingTime.days}</CounterSquareBox>
            <Colon/>
            <CounterSquareBox>{remainingTime.hours[0]}</CounterSquareBox>
            <CounterSquareBox>{remainingTime.hours[1]}</CounterSquareBox>
            <Colon/>
            <CounterSquareBox>{remainingTime.minutes[0]}</CounterSquareBox>
            <CounterSquareBox>{remainingTime.minutes[1]}</CounterSquareBox>
            <Colon/>
            <CounterSquareBox>{remainingTime.seconds[0]}</CounterSquareBox>
            <CounterSquareBox>{remainingTime.seconds[1]}</CounterSquareBox>
        </Wrapper>
    );
};

export default AvailableTimeCounter;