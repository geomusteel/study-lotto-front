import React, {useState} from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision";
import NumberGenerator from "../atoms/icon/main-navigation/NumberGenerator";
import NumberSave from "../atoms/icon/main-navigation/NumberSave";
import WinningReviews from "../atoms/icon/main-navigation/WinningReviews";
import MyPage from "../atoms/icon/main-navigation/MyPage";


const Wrapper = styled(FlexCenterDivision)`
    width: 580px;
    height: 100px;
    background-color: #ffffff;
    gap: 24px;
    box-shadow: 0 -8px 12px -12px rgba(0, 0, 0, 0.1);
`;


const MainNavigation = () => {

    const [isActiveNumber, setIsActiveNumber] = useState<number>(1);

    const handleOnclick = (selectNumber: number) => {
        setIsActiveNumber(selectNumber)
    }

    return (
        <Wrapper>
            <NumberGenerator isActive={1 === isActiveNumber} onClick={() => handleOnclick(1)}/>
            <NumberSave isActive={2 === isActiveNumber} onClick={() => handleOnclick(2)}/>
            <WinningReviews isActive={3 === isActiveNumber} onClick={() => handleOnclick(3)}/>
            <MyPage isActive={4 === isActiveNumber} onClick={() => handleOnclick(4)}/>
        </Wrapper>
    );
};

export default MainNavigation;