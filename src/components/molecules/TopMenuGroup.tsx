import React, { useState} from 'react';
import TopMenuText from "../atoms/paragraph/TopMenuText"
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

const Wrapper = styled(FlexCenterDivision)`
    width: 580px;
    height: 60px;
    gap: 36px;
`

const TopMenuGroup = () => {

    const [stageNumber, setStageNumber] = useState<number>(1);

    const handleStageChange = (state: number) => {
        setStageNumber(state)
    }

    return (
        <Wrapper>
            <TopMenuText isSelected={1 === stageNumber} onClick={() => handleStageChange(1)}>번호생성</TopMenuText>
            <TopMenuText isSelected={2 === stageNumber} onClick={() => handleStageChange(2)}>회차검색</TopMenuText>
            <TopMenuText isSelected={3 === stageNumber} onClick={() => handleStageChange(3)}>번호통계</TopMenuText>
        </Wrapper>
    );
};

export default TopMenuGroup;