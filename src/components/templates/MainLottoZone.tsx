import React from 'react';
import DrawHeader from "../atoms/paragraph/DrawHeader";
import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

export const Wrapper = styled(FlexCenterDivision)`
    height: 600px;
    width: 580px;
    flex-direction: column;
    background-color: #ffffff;
`

const MainLottoZone = () => {
    return (
        <Wrapper>
            <DrawHeader/>
        </Wrapper>
    );
};

export default MainLottoZone;