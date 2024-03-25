import React from 'react';
import TopNavigation from "../components/organisms/TopNavigation"
import AvailableTimeCounter from "../components/organisms/AvailableTimeCounter"
import LottoBaseNumberZone from "../components/organisms/LottoBaseNumberZone"

const MainPage = () => {
    return (
        <div>
            <TopNavigation/>
            <AvailableTimeCounter/>
            <LottoBaseNumberZone/>
        </div>
    );
};

export default MainPage;