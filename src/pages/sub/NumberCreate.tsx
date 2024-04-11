import React from 'react';
import AvailableTimeCounter from "../../components/templates/AvailableTimeCounter";
import LottoBaseNumberZone from '../../components/templates/LottoBaseNumberZone';
import MainLottoZone from '../../components/templates/MainLottoZone';

const NumberCreate = () => {
    return (
        <>
            <AvailableTimeCounter/>
            <LottoBaseNumberZone/>
            <MainLottoZone/>
        </>
    );
};

export default NumberCreate;