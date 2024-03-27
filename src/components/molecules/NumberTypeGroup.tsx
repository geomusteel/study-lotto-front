import React from 'react';
import NumberTypeTextGroup from "./NumberTypeTextGroup"
import NumberTypeIndicatorGroup from "./NumberTypeIndicatorGroup"
import styled from "styled-components";

const Wrapper = styled.div`
    width: 120px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NumberTypeGroup = () => {
    return (
        <Wrapper>
            <NumberTypeIndicatorGroup/>
            <NumberTypeTextGroup/>
        </Wrapper>
    );
};

export default NumberTypeGroup;