import React from 'react';
import LottoNumberSet from "../molecules/LottoNumberSet"
import * as S from "./LottoBaseNumberZone.style"

const LottoBaseNumberZone = () => {
    return (
        <S.Wrapper>
            <LottoNumberSet/>
        </S.Wrapper>
    );
};

export default LottoBaseNumberZone;