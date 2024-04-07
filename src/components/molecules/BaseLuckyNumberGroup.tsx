import React from 'react';
import BaseNumberRoundItem from "../atoms/box/BaseNumberRoundItem"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {luckyNumberOpen} from "../../slice/LottoNumberSlice"
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"
import {Lotto} from "../../common/interface";

const Wrapper = styled(FlexCenterDivision)`
    width: 340px;
    height: 60px;
    gap: 8px;
`

const BaseLuckyNumberGroup = () => {

    const dispatch = useAppDispatch()
    const lottoNumber = useAppSelector(state => state.lottoNumber.luckyNumber);

    const handleIsOpenChange = (item: Lotto) => {
        dispatch(luckyNumberOpen(item))
    }

    return (
        <Wrapper>
            {lottoNumber.map((item, index) => {
                return (
                    <BaseNumberRoundItem key={index}
                                         color={item.color}
                                         isOpen={item.isOpen}
                                         onClick={() => handleIsOpenChange(item)}>
                        {item.number}
                    </BaseNumberRoundItem>
                )
            })}
        </Wrapper>
    );
};

export default BaseLuckyNumberGroup;