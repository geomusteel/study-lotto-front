import React from 'react';
import LargeButton from "../atoms/button/LargeButton";
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision";
import {useDispatch} from "react-redux";
import {setMainLottoNumberAll, resetMainLottoNumber} from "../../slice/LottoNumberSlice";

const Wrapper = styled(FlexCenterDivision)`
    width: 532px;
    height: 72px;
    gap: 20px;
`

const LargeButtonGroup = () => {

    const dispatch = useDispatch();
    const handleGenerate = () => {
        dispatch(setMainLottoNumberAll())
    }
    const handleReset = () => {
        dispatch(resetMainLottoNumber())
    }

    return (
        <Wrapper>
            <LargeButton onClick={() => handleReset()}>초기화</LargeButton>
            <LargeButton>번호저장</LargeButton>
            <LargeButton onClick={() => handleGenerate()}>전체생성</LargeButton>
        </Wrapper>
    );
};

export default LargeButtonGroup;