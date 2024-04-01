import React from 'react';
import BaseLuckyNumberGroup from "../molecules/BaseLuckyNumberGroup"
import SmallButton from "../atoms/button/SmallButton"
import {useAppDispatch} from "../../hooks";
import {generateLuckyNumber} from "../../slice/LottoNumberSlice"
import NumberTypeGroup from "../molecules/NumberTypeGroup"

import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 580px;
    height: 80px;
    margin: 10px 0;
    background-color: #ffffff;
`

export const LeftBox = styled(FlexCenterDivision)`
    width: 140px;
    height: 60px;
    margin-left: 5px;
    margin-right: -5px;

`

export const RightBox = styled(FlexCenterDivision)`
    width: 100px;
    height: 60px;
    margin-left: -5px;
    margin-right: 5px;
`


const LottoBaseNumberZone = () => {

    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(generateLuckyNumber())
    }

    return (
        <Wrapper >
            <LeftBox>
                <NumberTypeGroup/>
            </LeftBox>
            <BaseLuckyNumberGroup/>
            <RightBox>
                <SmallButton onClick={() => handleOnClick()}>RESET</SmallButton>
            </RightBox>
        </Wrapper>
    );
};

export default LottoBaseNumberZone;