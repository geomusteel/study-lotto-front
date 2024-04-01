import React from 'react';
import {PiBookmarkSimple, PiBookmarkSimpleFill} from "react-icons/pi";
import styled from "styled-components";
import {FlexCenterDivision} from "../../../../common/div/FlexCenterDivision";

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

const NumberSave = ({isActive, onClick}: Props) => {
    return (
        <Wrapper $isActive={isActive} onClick={onClick}>
            {isActive ? <PiBookmarkSimpleFill/> : <PiBookmarkSimple/>}
            <p>번호저장</p>
        </Wrapper>
    );
};

export default NumberSave;