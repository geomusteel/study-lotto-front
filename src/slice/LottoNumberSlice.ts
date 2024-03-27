import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {generateSortLottoNumbers, generateUnsortedLottoNumbers} from "../utilize/generateLottoNumbers"
import {Lotto, LottoGroups, LottoState} from "../common/interface"


const initialItem: Lotto[] = [
    {number: 0, color: "#f3f5f6", isOpen: false},
    {number: 0, color: "#f3f5f6", isOpen: false},
    {number: 0, color: "#f3f5f6", isOpen: false},
    {number: 0, color: "#f3f5f6", isOpen: false},
    {number: 0, color: "#f3f5f6", isOpen: false},
    {number: 0, color: "#f3f5f6", isOpen: false},
]

const initialGroup: LottoGroups = [
    initialItem, initialItem, initialItem, initialItem, initialItem
]


const initialState: LottoState = {
    luckyNumber: generateUnsortedLottoNumbers(),
    manualNumber: [],
    lottoNumbers: initialGroup,
    isLuckyNumberView: 'luckyNumber',
    currentDraw: 1030
};

export const lottoNumberSlice = createSlice({
    name: 'lottoNumber',
    initialState: initialState,
    reducers: {
        generateLuckyNumber: (state) => {
            state.luckyNumber = generateUnsortedLottoNumbers();
        },
        luckyNumberOpen: (state, action: PayloadAction<Lotto>) => {
            state.luckyNumber = state.luckyNumber.map((item) => {
                if (item.number === action.payload.number) {
                    return {...item, isOpen: !item.isOpen}
                }
                return item;
            })
        },
        setMainLottoNumber: (state, action: PayloadAction<number>) => {
            const openValue = state.luckyNumber.filter((item) => item.isOpen)
            state.lottoNumbers[action.payload] = generateSortLottoNumbers(openValue)
        },
        setMainLottoNumberAll: (state) => {
            const openValue = state.luckyNumber.filter((item) => item.isOpen)
            const newValue: LottoGroups = []
            for (let i = 0; i < 5; i++) {
                newValue.push(generateSortLottoNumbers(openValue))
            }
            state.lottoNumbers = newValue;
        },
        resetMainLottoNumber: (state) => {
            state.lottoNumbers = initialGroup;
        }

    }
})

export const {
    generateLuckyNumber,
    luckyNumberOpen,
    setMainLottoNumber,
    setMainLottoNumberAll,
    resetMainLottoNumber
} = lottoNumberSlice.actions


export default lottoNumberSlice.reducer