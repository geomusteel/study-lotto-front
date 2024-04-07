import React from 'react';
import {Reset} from 'styled-reset'
import MainPage from './pages/MainPage'
import styled from "styled-components";
import {FlexCenterDivision} from "./common/div/FlexCenterDivision"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainNavigation from "./components/templates/MainNavigation";
import SubPageOne from "./pages/SubPageOne";
import SubPageTwo from './pages/SubPageTwo';
import SubPageThree from "./pages/SubPageThree";

export const Wrapper = styled(FlexCenterDivision)`
    width: 100vw;
    min-width: 560px;
    height: 100vh;
    min-height: 1008px;
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
                    <Route path="sub1" element={<SubPageOne/>}/>
                    <Route path="sub2" element={<SubPageTwo/>}/>
                    <Route path="sub3" element={<SubPageThree/>}/>
                </Routes>
                <MainNavigation/>
            </BrowserRouter>

        </Wrapper>
    );
}

export default App;
