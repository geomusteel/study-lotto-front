import React from 'react';
import {useAppSelector} from "../../hooks"
import SmallIndicator from "../atoms/box/SmallIndicator";
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

const Wrapper = styled(FlexCenterDivision)`
    flex-direction: column;
    width: 20px;
    height: 60px;
    gap: 8px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const NumberTypeIndicatorGroup = () => {

    const isLuckyNumberView = useAppSelector(state => state.lottoNumber.isLuckyNumberView);
    return (
        <Wrapper>
            <SmallIndicator isCheck={'luckyNumber' === isLuckyNumberView}/>
            <SmallIndicator isCheck={'manualNumber' === isLuckyNumberView}/>
        </Wrapper>
    );
};

export default NumberTypeIndicatorGroup;