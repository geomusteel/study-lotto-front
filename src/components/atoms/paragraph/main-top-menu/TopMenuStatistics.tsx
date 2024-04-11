import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Wrapper = styled(NavLink)<{ $isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
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

    &:link {
        transition: 0.1s;
        text-decoration: none;
    }

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

const TopMenuCreate = ({isActive, children}: props) => {
    return (
        <Wrapper to={"/main/3"} $isActive={isActive}>
            {children}
        </Wrapper>
    );
};

export default TopMenuCreate;