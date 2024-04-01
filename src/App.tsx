import React from 'react';
import {Reset} from 'styled-reset'
import MainPage from './pages/MainPage'
import styled from "styled-components";
import {FlexCenterDivision} from "./common/div/FlexCenterDivision"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainNavigation from "./components/templates/MainNavigation";

export const Wrapper = styled(FlexCenterDivision)`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #e5e8eb;
`


const App = () => {
    return (
        <Wrapper>
            <Reset/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
            <MainNavigation/>
        </Wrapper>
    );
}

export default App;
