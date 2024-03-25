import React from 'react';
import {Reset} from 'styled-reset'
import MainPage from './pages/MainPage'
import * as S from "./App.style"

const App = () => {
    return (
        <S.Wrapper>
            <Reset/>
            <MainPage/>
        </S.Wrapper>
    );
}

export default App;
