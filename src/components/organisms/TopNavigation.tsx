import React from 'react';
import TopMenu from "../molecules/TopMenu"
import * as S from "./TopNavigation.style"

const TopNavigation = () => {
    return (
        <S.Wrapper>
            <div style={{height: "60px", display: "flex",justifyContent:"center",alignItems:"center",color:"white"}}>Todo</div>
            <TopMenu/>
        </S.Wrapper>
    );
};

export default TopNavigation;