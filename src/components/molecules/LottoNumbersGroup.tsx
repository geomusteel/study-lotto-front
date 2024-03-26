import React from 'react';
import LottoNumberRoundItem from "../atoms/box/LottoNumberRoundItem"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {LuckyNumberOpen} from "../../slice/LottoNumberSlice"
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

export const Wrapper = styled(FlexCenterDivision)`
    width: 340px;
    height: 60px;
    gap: 8px;
`

interface lotto {
    number: number,
    color: string,
    isOpen: boolean
}


const LottoNumbersGroup = () => {

    const dispatch = useAppDispatch()
    const lottoNumber = useAppSelector(state => state.lottoNumber.luckyNumber);

    const handleIsOpenChange = (item: lotto) => {
        dispatch(LuckyNumberOpen(item))
    }

    return (
        <Wrapper>
            {lottoNumber.map((item, index) => {
                return (
                    <LottoNumberRoundItem key={index}
                                          color={item.color}
                                          isOpen={item.isOpen}
                                          onClick={() => handleIsOpenChange(item)}>
                        {item.number}
                    </LottoNumberRoundItem>
                )
            })}
        </Wrapper>
    );
};

export default LottoNumbersGroup;