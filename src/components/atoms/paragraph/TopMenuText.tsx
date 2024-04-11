import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision"

const Wrapper = styled(FlexCenterDivision)<{ $isActive: boolean }>`
    font-size: 30px;
    color: ${(props) => (props.$isActive ? "#ffffff" : "#f5f5f5")};
    width: 140px;
    height: 60px;
    font-family: 'GmarketSansMedium', serif;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        color: ${(props) => (props.$isActive ? "#f5f5f5" : "#f0f0f0")};
    }

    ${props => props.$isActive && `
        &::after {
            content: '';
            width: 120px;
            height: 4px;
            bottom: 0;
            border-radius: 2px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
        }
    `}
`;


interface props {
    isActive: boolean
    children: string;
}

const TopMenuText = ({isActive, children}: props) => {
    return (
        <Wrapper $isActive={isActive}>
            {children}
        </Wrapper>
    );
};

export default TopMenuText;