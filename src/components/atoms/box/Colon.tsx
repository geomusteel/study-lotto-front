import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision";

const Wrapper = styled(FlexCenterDivision)`
    width: 8px;
    font-size: 24px;
    font-family: 'GmarketSansMedium',serif;
    font-weight: bold;
    color: #999999;
`

const Colon = () => {
    return (
        <Wrapper>
            :
        </Wrapper>
    );
};

export default Colon;