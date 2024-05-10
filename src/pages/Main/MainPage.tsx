import React from 'react';
import TopNavigation from '../../components/main/TopNavigation';
import { Outlet } from 'react-router-dom';
import AvailableTimeCounter from '../../components/main/AvailableTimeCounter';
import LottoBaseNumberZone from '../../components/main/LottoBaseNumberZone';

const MainPage = () => {
  return (
    <div>
      <TopNavigation />
      <AvailableTimeCounter />
      <LottoBaseNumberZone />
      <Outlet />
    </div>
  );
};

export default MainPage;
