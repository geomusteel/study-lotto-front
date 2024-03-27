import React from 'react';
import {FaShuffle} from "react-icons/fa6";
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";
import {useDispatch} from "react-redux";
import {setMainLottoNumber} from "../../../slice/LottoNumberSlice";

const Wrapper = styled(FlexCenterDivision)`
    width: 70px;
    height: 50px;
    margin-left: -10px;
    margin-right: 10px;
`

interface Props {
    onClick: () => void
}

const Shuffle = ({onClick}:Props) => {


    return (
        <Wrapper>
            <FaShuffle onClick={onClick} cursor={"pointer"} size={"30px"} color={"#4d4d4d"}/>
        </Wrapper>
    );
};

export default Shuffle;