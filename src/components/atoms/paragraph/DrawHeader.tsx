import React from 'react';
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
    return (
        <Wrapper >
            2024 회차
        </Wrapper>
    );
};

export default DrawHeader;