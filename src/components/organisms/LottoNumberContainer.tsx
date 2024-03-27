import React from 'react';
import styled from "styled-components";
import LottoNumberGroup from "../molecules/LottoNumberGroup";
import SmallDivider from "../atoms/box/SmallDivider";
import Shuffle from "../atoms/icon/Shuffle";
import {LottoGroup} from "../../common/interface"
import {useDispatch} from "react-redux";
import {setMainLottoNumber} from "../../slice/LottoNumberSlice"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 532px;
    height: 72px;
    border-radius: 36px;
    box-sizing: border-box;
    border: 2px solid #e5e5e5;
`


interface Props {
    id: number
    lottoNumber: LottoGroup
}

const LottoNumberContainer = ({id, lottoNumber}: Props) => {

    const dispatch = useDispatch();

    const HandleClick = (id: number) => {
        dispatch(setMainLottoNumber(id))
    }


    return (
        <Wrapper>
            <div style={{width: "70px", height: "50px"}}></div>
            <SmallDivider/>
            <LottoNumberGroup lottoNumber={lottoNumber}/>
            <SmallDivider/>
            <Shuffle onClick={()=>HandleClick(id)}/>
        </Wrapper>
    );
};

export default LottoNumberContainer;