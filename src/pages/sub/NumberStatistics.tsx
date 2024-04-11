import React from 'react';
import styled from "styled-components";
import StatisticsSelect from "../../components/templates/StatisticsSelect";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 788px;
    width: 580px;
    background-color: #ffffff;
`
const NumberStatistics = () => {
    return (
        <Wrapper>
            <StatisticsSelect/>
        </Wrapper>
    );
};

export default NumberStatistics;