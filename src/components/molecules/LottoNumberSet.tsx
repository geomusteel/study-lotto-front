import React, {useState} from 'react';
import * as S from "./LottoNumberSet.style"
import LottoNumberItem from "../atoms/LottoNumberItem"
import {generateUnsortedLottoNumbers} from "../../utilize/generateLottoNumbers"

interface lotto {
    number: number,
    color: string,
    isOpen: boolean
}


const LottoNumberSet = () => {

    const [lottoNumber, setLottoNumber] = useState<lotto[]>(generateUnsortedLottoNumbers())

    const handleIsOpenChange = (outItem: lotto) => {
        const newValue = lottoNumber.map((item, index) => {
            if (item.number === outItem.number) {
                return {...item, isOpen: !item.isOpen}
            }
            return item;
        })
        setLottoNumber(newValue)

    }

    return (
        <S.Wrapper>
            {lottoNumber.map((item, index) => {
                return (
                    <LottoNumberItem key={index}
                                     color={item.color}
                                     isOpen={item.isOpen}
                                     onClick={() => handleIsOpenChange(item)}>
                        {item.number}
                    </LottoNumberItem>
                )
            })}
        </S.Wrapper>
    );
};

export default LottoNumberSet;