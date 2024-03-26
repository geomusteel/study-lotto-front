import React from 'react';
import styled from "styled-components";
import {FlexCenterButton} from "../../../common/button/FlexCenterbutton"


export const Wrapper = styled(FlexCenterButton)`
    width: 72px;
    height: 36px;
    background-color: #f5f5f5;
    border-radius: 20px;
    border: 1px solid #f0f0f0;
    color: #808080;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
`

interface props {
    children: string
    onClick?: () => void
}

const SmallButton = ({children, onClick}: props) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
};

export default SmallButton;