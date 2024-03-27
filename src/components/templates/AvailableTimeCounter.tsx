import React from 'react';

import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

const Wrapper = styled(FlexCenterDivision)`
    height: 88px;
    width: 580px;
    box-sizing: border-box;
    border-top: 1px solid #d8d8d8;
    background-color: #f3f5f6;
`

const AvailableTimeCounter = () => {
    return (
        <Wrapper>
            <p>Todo</p>
        </Wrapper>
    );
};

export default AvailableTimeCounter;