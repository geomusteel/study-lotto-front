import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`

    height: 50px;
    padding: 0 8px;
    border-radius: 4px;
    background-color: #ffffff;

    box-sizing: border-box;
    
    font-size: 24px;
    font-family: 'TheJamsil3Regular', serif;
    color : #ff983f;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
`

interface Props {
    children: string
}

const CounterSquareBox = ({children}: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default CounterSquareBox;