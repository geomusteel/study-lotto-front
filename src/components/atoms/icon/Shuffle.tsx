import React from 'react';
import {FaShuffle} from "react-icons/fa6";
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`
    width: 70px;
    height: 50px;
    margin-left: -10px;
    margin-right: 10px;
    transition: 0.1s ease;
    color: #4d4d4d;
    font-size: 30px;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:active {
        color: #505050;
        transform: scale(1.05);
    }

`

interface Props {
    onClick: () => void
}

const Shuffle = ({onClick}: Props) => {

    return (
        <Wrapper>
            <FaShuffle onClick={onClick} cursor={"pointer"}/>
        </Wrapper>
    );
};

export default Shuffle;