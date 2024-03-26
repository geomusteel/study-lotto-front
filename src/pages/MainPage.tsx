import React from 'react';
import TopNavigation from "../components/templates/TopNavigation"
import AvailableTimeCounter from "../components/templates/AvailableTimeCounter"
import LottoBaseNumberZone from "../components/templates/LottoBaseNumberZone"
import MainLottoZone from "../components/templates/MainLottoZone";

const MainPage = () => {
    return (
        <div>
            <TopNavigation/>
            <AvailableTimeCounter/>
            <LottoBaseNumberZone/>
            <MainLottoZone/>
        </div>
    );
};

export default MainPage;