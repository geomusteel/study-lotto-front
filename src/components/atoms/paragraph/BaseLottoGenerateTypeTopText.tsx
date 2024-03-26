import React from 'react';
import styled from "styled-components";

export const Wrapper = styled.div`
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 800;
    margin-left: 8px;
    margin-right: -8px;
    color: #4d4d4d;
`

interface props {
    children: string
}


const BaseLottoGenerateTypeTopText = ({children}: props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default BaseLottoGenerateTypeTopText;