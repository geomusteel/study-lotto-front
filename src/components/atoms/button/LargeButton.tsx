import React from 'react';
import styled from "styled-components";
import {FlexCenterButton} from "../../../common/button/FlexCenterbutton";

const Wrapper = styled(FlexCenterButton)`
    width: 164px;
    height: 48px;
    background-color: #f5f5f5;
    border-radius: 24px;
    border: 1px solid #f0f0f0;
    color: #808080;
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
`

interface Props {
    children: string
    onClick?: () => void
}

const LargeButton = ({children, onClick}: Props) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
};

export default LargeButton;