import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`
    width: 524px;
    height: 60px;
    font-size: 40px;
    font-family: 'TheJamsil5Bold', serif;
    color: #4c4c4c;
`

const DrawHeader = () => {

    const [currentLottoDraw, setCurrentLottoDraw] = useState<number>(0);

    useEffect(() => {
        const calculateLottoDraw = () => {
            const startDate = new Date(2002, 11, 7);
            const currentDate = new Date();
            const differenceInTime = currentDate.getTime() - startDate.getTime();
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
            const currentDraw = Math.floor(differenceInDays / 7) + 1;
            setCurrentLottoDraw(currentDraw+1);
        };

        calculateLottoDraw();
    }, []);


    return (
        <Wrapper >
            {currentLottoDraw} 회차
        </Wrapper>
    );
};

export default DrawHeader;