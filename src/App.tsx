import React from 'react';
import { Reset } from 'styled-reset';
import MainPage from './pages/Main/MainPage';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavigation from './components/nav/MainNavigation';
import SubPageOne from './pages/SubPageOne';
import SubPageTwo from './pages/SubPageTwo';
import SubPageThree from './pages/SubPageThree';
import NumberCreate from './pages/Main/NumberCreate';
import NumberStatistics from './pages/Main/NumberStatistics';
import RoundSearch from './pages/Main/RoundSearch';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 560px;
  height: 100vh;
  min-height: 1008px;
  flex-direction: column;
  background-color: #e5e8eb;
`;

const App = () => {
  return (
    <Wrapper>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<NumberCreate />} />
            <Route path="main/2" element={<RoundSearch />} />
            <Route path="main/3" element={<NumberStatistics />} />
          </Route>
          <Route path="sub1" element={<SubPageOne />} />
          <Route path="sub2" element={<SubPageTwo />} />
          <Route path="sub3" element={<SubPageThree />} />
        </Routes>
        <MainNavigation />
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
