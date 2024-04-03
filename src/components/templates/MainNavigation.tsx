import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision";
import NumberGenerator from "../atoms/icon/main-navigation/NumberGenerator";
import NumberSave from "../atoms/icon/main-navigation/NumberSave";
import WinningReviews from "../atoms/icon/main-navigation/WinningReviews";
import MyPage from "../atoms/icon/main-navigation/MyPage";
import {useLocation} from "react-router-dom";


const Wrapper = styled(FlexCenterDivision)`
    width: 580px;
    height: 100px;
    background-color: #ffffff;
    gap: 24px;
    box-shadow: 0 -8px 12px -12px rgba(0, 0, 0, 0.1);
`;


const MainNavigation = () => {

    const location = useLocation();


    return (
        <Wrapper>
            <NumberGenerator isActive={location.pathname === "/"}/>
            <NumberSave isActive={location.pathname === "/sub1"}/>
            <WinningReviews isActive={location.pathname === "/sub2"}/>
            <MyPage isActive={location.pathname === "/sub3"}/>
        </Wrapper>
    );
};

export default MainNavigation;