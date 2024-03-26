import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {generateUnsortedLottoNumbers} from "../utilize/generateLottoNumbers"


interface LottoNumber {
    number: number,
    color: string,
    isOpen: boolean
}

type isLuckyNumberView = 'luckyNumber' | 'manualNumber'
interface LottoState {
    luckyNumber: LottoNumber[]
    manualNumber: LottoNumber[]
    isLuckyNumberView: isLuckyNumberView
    lottoNumbers: [LottoNumber[]]
    currentDraw: number
}

const initialState: LottoState = {
    luckyNumber: generateUnsortedLottoNumbers(),
    manualNumber: [],
    isLuckyNumberView: 'luckyNumber',
    lottoNumbers: [[]],
    currentDraw: 1030
};

export const lottoNumberSlice = createSlice({
    name: 'lottoNumber',
    initialState: initialState,
    reducers: {
        generateLuckyNumber: (state) => {
            state.luckyNumber = generateUnsortedLottoNumbers();
        },
        LuckyNumberOpen: (state, action: PayloadAction<LottoNumber>) => {
            state.luckyNumber = state.luckyNumber.map((item) => {
                if (item.number === action.payload.number) {
                    return {...item, isOpen: !item.isOpen}
                }
                return item;
            })
        }
        // const handleIsOpenChange = (outItem: lotto) => {
        //     const newValue = lottoNumber.map((item, index) => {
        //         if (item.number === outItem.number) {
        //             return {...item, isOpen: !item.isOpen}
        //         }
        //         return item;
        //     })
        //     setLottoNumber(newValue)
        // }
    }
})

export const {
    generateLuckyNumber,
    LuckyNumberOpen
} = lottoNumberSlice.actions


export default lottoNumberSlice.reducer