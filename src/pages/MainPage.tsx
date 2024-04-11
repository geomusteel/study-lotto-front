import React from 'react';
import TopNavigation from "../components/templates/TopNavigation"
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <TopNavigation/>
            <Outlet/>
        </div>
    );
};

export default MainPage;