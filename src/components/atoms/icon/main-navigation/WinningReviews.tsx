import React from 'react';
import {PiNotePencil, PiNotePencilFill} from "react-icons/pi";
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

const WinningReviews = ({isActive, onClick}: Props) => {
    return (
        <Wrapper $isActive={isActive} onClick={onClick}>
            {isActive ? <PiNotePencilFill/> : <PiNotePencil/>}
            <p>당첨후기</p>
        </Wrapper>
    );
};

export default WinningReviews;