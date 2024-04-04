import React from 'react';
import styled from "styled-components";
import BaseLottoGenerateTypeTopText from "../atoms/paragraph/BaseLottoGenerateTypeTopText";
import BaseLottoGenerateTypeBottomText from "../atoms/paragraph/BaseLottoGenerateTypeBottomText";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 60px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
`

interface Props {
    mainString: string,
    subString: string
    onClick: () => void
}

const NumberTypeTextGroup = ({mainString, subString, onClick}: Props) => {
    return (
        <Wrapper onClick={onClick}>
            <BaseLottoGenerateTypeTopText>{mainString}</BaseLottoGenerateTypeTopText>
            <BaseLottoGenerateTypeBottomText>{subString}</BaseLottoGenerateTypeBottomText>
        </Wrapper>
    );
};

export default NumberTypeTextGroup;