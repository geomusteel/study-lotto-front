import React from 'react';
import {PiNotePencil, PiNotePencilFill} from "react-icons/pi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

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
        transition : 0.1s;
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

const WinningReviews = ({isActive}: Props) => {
    return (
        <Wrapper to="/sub2" $isActive={isActive}>
            {isActive ? <PiNotePencilFill/> : <PiNotePencil/>}
            <p>당첨후기</p>
        </Wrapper>
    );
};

export default WinningReviews;