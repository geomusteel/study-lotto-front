import React from 'react';
import DrawHeader from "../atoms/paragraph/DrawHeader";
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"
import LottoNumberContainer from "../organisms/LottoNumberContainer";
import LargeButtonGroup from "../molecules/LargeButtonGroup";
import {useAppSelector} from "../../hooks";


const Wrapper = styled(FlexCenterDivision)`
    height: 600px;
    width: 580px;
    flex-direction: column;
    background-color: #ffffff;
    gap: 12px;
`

const MainLottoZone = () => {

    const lottoNumbers = useAppSelector(state => state.lottoNumber.lottoNumbers);

    return (
        <Wrapper>
            <DrawHeader/>
            {lottoNumbers.map((item,index) => {
                return <LottoNumberContainer key={index} id={index} lottoNumber={item} />
            })}
            <LargeButtonGroup/>
        </Wrapper>
    );
};

export default MainLottoZone;