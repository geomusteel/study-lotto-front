import React from 'react';
import styled from "styled-components";
import {PiNumberCircleSeven, PiNumberCircleSevenFill} from "react-icons/pi";
import {NavLink, useLocation} from "react-router-dom";

const Wrapper = styled(NavLink)<{ $isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    color: ${(props) => props.$isActive ? "#ff6600" : "#4d4d4d"};
    font-size: 40px;
    gap: 8px;

    &:link {
        transition: 0.1s;
        text-decoration: none;
    }

    & p {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        font-size: 14px;
    }
`;

interface Props {
    isActive: boolean
}

const NumberGenerator = ({isActive}: Props) => {

    const location = useLocation().pathname.startsWith('/main');

    return (
        <Wrapper to="/" $isActive={isActive || location}>
            {isActive || location ? <PiNumberCircleSevenFill/> : <PiNumberCircleSeven/>}
            <p>번호생성</p>
        </Wrapper>
    );
};

export default NumberGenerator;