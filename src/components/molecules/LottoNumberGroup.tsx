import React, {useEffect, useState} from 'react';
import LottoNumberRoundItem from "../atoms/box/LottoNumberRoundItem";
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`
    width: 340px;
    height: 60px;
    gap: 8px;
`

interface Lotto {
    number: number,
    color: string,
    isOpen: boolean
}

interface Props {
    lottoNumber: Lotto[]
}


const BaseLuckyNumberGroup = ({lottoNumber}: Props) => {


    return (
        <Wrapper>
            {lottoNumber.map((item, index) => {
                return (
                    <LottoNumberRoundItem key={index}
                                          color={item.color}
                                          isOpen={item.isOpen}
                    >
                        {item.number}
                    </LottoNumberRoundItem>
                )
            })}
        </Wrapper>
    );
};

export default BaseLuckyNumberGroup;