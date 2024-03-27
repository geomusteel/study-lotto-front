import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    margin-left: 8px;
    margin-right: -8px;
    color: #4d4d4d;
`

interface props {
    children: string
}

const BaseLottoGenerateTypeBottomText = ({children}: props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default BaseLottoGenerateTypeBottomText;