import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"
import {useLocation} from "react-router-dom";
import TopMenuCreate from "../atoms/paragraph/main-top-menu/TopMenuCreate";
import TopMenuDraw from "../atoms/paragraph/main-top-menu/TopMenuDraw";
import TopMenuStatistics from "../atoms/paragraph/main-top-menu/TopMenuStatistics";

const Wrapper = styled(FlexCenterDivision)`
    width: 580px;
    height: 60px;
    gap: 36px;
`

const TopMenuGroup = () => {

    const location = useLocation();

    return (
        <Wrapper>
            <TopMenuCreate isActive={location.pathname === "/"}>번호생성</TopMenuCreate>
            <TopMenuDraw isActive={location.pathname === "/main/2"}>회차검색</TopMenuDraw>
            <TopMenuStatistics isActive={location.pathname === "/main/3"}>번호통계</TopMenuStatistics>
        </Wrapper>
    );
};

export default TopMenuGroup;