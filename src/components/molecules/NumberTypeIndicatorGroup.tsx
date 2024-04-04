import React from 'react';
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

interface Props {
    isLuckyNumber: boolean
    onClick: () => void
}

const NumberTypeIndicatorGroup = ({isLuckyNumber, onClick}: Props) => {


    return (
        <Wrapper onClick={onClick}>
            <SmallIndicator isCheck={isLuckyNumber}/>
            <SmallIndicator isCheck={!isLuckyNumber}/>
        </Wrapper>
    );
};

export default NumberTypeIndicatorGroup;