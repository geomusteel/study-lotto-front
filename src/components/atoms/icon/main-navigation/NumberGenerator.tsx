import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../../common/div/FlexCenterDivision";
import {PiNumberCircleSeven, PiNumberCircleSevenFill} from "react-icons/pi";

const Wrapper = styled(FlexCenterDivision)<{ $isActive: boolean }>`
    flex-direction: column;
    width: 100px;
    height: 100px;
    color: ${(props) => props.$isActive ? "#ff6600" : "#4d4d4d"};
    font-size: 40px;
    gap: 8px;

    & p {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        font-size: 14px;
    }
`;

interface Props {
    isActive: boolean
    onClick: () => void
}

const NumberGenerator = ({isActive, onClick}: Props) => {
    return (
        <Wrapper $isActive={isActive} onClick={onClick}>
            {isActive ? <PiNumberCircleSevenFill/> : <PiNumberCircleSeven/>}
            <p>번호생성</p>
        </Wrapper>
    );
};

export default NumberGenerator;