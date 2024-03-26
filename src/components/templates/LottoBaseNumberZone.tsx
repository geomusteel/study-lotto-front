import React from 'react';
import LottoNumbersGroup from "../molecules/LottoNumbersGroup"
import SmallButton from "../atoms/button/SmallButton"
import * as S from "./LottoBaseNumberZone.style"
import {useAppDispatch} from "../../hooks";
import {generateLuckyNumber} from "../../slice/LottoNumberSlice"
import NumberTypeGroup from "../molecules/NumberTypeGroup"

const LottoBaseNumberZone = () => {

    const dispatch = useAppDispatch();
    const handleOnClick = () => {
        dispatch(generateLuckyNumber())
    }

    return (
        <S.Wrapper style={{width:"580px",height:"80px"}}>
            <S.LeftBox>
                <NumberTypeGroup/>
            </S.LeftBox>
            <LottoNumbersGroup/>
            <S.RightBox>
                <SmallButton onClick={() => handleOnClick()}>RESET</SmallButton>
            </S.RightBox>

        </S.Wrapper>
    );
};

export default LottoBaseNumberZone;