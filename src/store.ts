import {configureStore} from '@reduxjs/toolkit'
import LottoNumberReducer from './slice/LottoNumberSlice'


export const store = configureStore({
    reducer: {
        lottoNumber: LottoNumberReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;