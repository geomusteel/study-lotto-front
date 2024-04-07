import React from 'react';
import NumberTypeTextGroup from "../molecules/NumberTypeTextGroup"
import NumberTypeIndicatorGroup from "../molecules/NumberTypeIndicatorGroup"
import styled from "styled-components";
import BaseLuckyNumberGroup from "../molecules/BaseLuckyNumberGroup";
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {changeIsLuckyNumber} from "../../slice/LottoNumberSlice";
import BaseManualNumberGroup from "../molecules/BaseManualNumberGroup";


const Wrapper = styled.div`
    width: 470px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: -5px;
`
const MiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 440px;
    height: 60px;
`

const SubWrapper = styled.div`
    display: flex;
    width: 440px;
    height: 60px;
`


const NumberTypeContainer = () => {

    const isLuckyNumber = useAppSelector(state => state.lottoNumber.isLuckyNumber);
    const dispatch = useDispatch();

    const handleIsLuckyNumber = () => {
        dispatch(changeIsLuckyNumber())
    }

    return (
        <Wrapper>
            <NumberTypeIndicatorGroup isLuckyNumber={isLuckyNumber}
                                      onClick={() => handleIsLuckyNumber()}/>
            <MiddleWrapper>
                {isLuckyNumber ?
                    <SubWrapper >
                        <NumberTypeTextGroup onClick={() => handleIsLuckyNumber()} mainString={"LUCKY"} subString={"NUMBER"}/>
                        <BaseLuckyNumberGroup/>
                    </SubWrapper>
                    :
                    <SubWrapper>
                        <NumberTypeTextGroup onClick={() => handleIsLuckyNumber()} mainString={"MANUAL"} subString={"NUMBER"}/>
                        <BaseManualNumberGroup/>
                    </SubWrapper>
                }
            </MiddleWrapper>

        </Wrapper>
    );
};

export default NumberTypeContainer;