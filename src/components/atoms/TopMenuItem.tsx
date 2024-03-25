import React from 'react';
import * as S from "./TopMenuItem.style"

interface props {
    isSelected:boolean
    children: string;
    onClick : () => void
}

const TopMenuItem = ({isSelected, onClick ,children}: props) => {
    return (
        <S.Wrapper $isSelected={isSelected} onClick={onClick}>
            {children}
        </S.Wrapper>
    );
};

export default TopMenuItem;