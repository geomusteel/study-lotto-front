import React from 'react';
import * as S from "./LottoNumberItem.style"

interface props {
    color: string;
    children: number;
    isOpen: boolean
    onClick?: () => void
}

const LottoNumberItem = ({isOpen, color, onClick, children}: props) => {
    return (
        <S.Wrapper $color={color} $isOpen={isOpen} onClick={onClick}>
            {isOpen && children}
        </S.Wrapper>
    );
};

export default LottoNumberItem;