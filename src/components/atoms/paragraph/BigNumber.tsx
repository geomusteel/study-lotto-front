import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`
    width: 70px;
    height: 50px;
    margin-left: 10px;
    margin-right: -10px;
    font-size: 40px;
    font-family: 'TheJamsil5Bold', serif;
    color: #4d4d4d;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

interface Props {
    children: string | number
}

const BigNumber = ({children}: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default BigNumber;