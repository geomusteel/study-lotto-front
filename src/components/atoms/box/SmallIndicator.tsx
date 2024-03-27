import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div<{ $isCheck: boolean }>`
    height: 20px;
    width: 4px;
    box-sizing: border-box;
    background-color: ${(props) => props.$isCheck ? "#ff6600" : "#f3f5f6"};
    border: ${(props) => props.$isCheck ? "none" : "1px solid #f0f0f0"};
    border-radius: 2px;
    cursor: pointer;
`

interface props {
    isCheck: boolean
}


const SmallIndicator = ({isCheck}: props) => {
    return (
        <Wrapper $isCheck={isCheck}/>
    );
};

export default SmallIndicator;