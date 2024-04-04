import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {colorSetting, generateSortLottoNumbers, generateUnsortedLottoNumbers} from "../utilize/generateLottoNumbers"
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
    manualNumber: initialItem,
    lottoNumbers: initialGroup,
    isLuckyNumber: true,
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
        resetBaseNumber: (state) => {
            if (state.isLuckyNumber) {
                state.luckyNumber = generateUnsortedLottoNumbers();
            } else {
                state.manualNumber = initialItem;
            }
        },
        setMainLottoNumber: (state, action: PayloadAction<number>) => {
            if (state.isLuckyNumber) {
                const openValue = state.luckyNumber.filter((item) => item.isOpen)
                state.lottoNumbers[action.payload] = generateSortLottoNumbers(openValue)
            } else {
                const openValue = state.manualNumber.filter((item) => item.number !== 0)
                state.lottoNumbers[action.payload] = generateSortLottoNumbers(openValue)
            }
        },
        setMainLottoNumberAll: (state) => {
            if (state.isLuckyNumber) {
                const openValue = state.luckyNumber.filter((item) => item.isOpen)
                const newValue: LottoGroups = []
                for (let i = 0; i < 5; i++) {
                    newValue.push(generateSortLottoNumbers(openValue))
                }
                state.lottoNumbers = newValue;
            } else {
                const openValue = state.manualNumber.filter((item) => item.number !== 0)
                const newValue: LottoGroups = []
                for (let i = 0; i < 5; i++) {
                    newValue.push(generateSortLottoNumbers(openValue))
                }
                state.lottoNumbers = newValue;

            }
        },
        resetMainLottoNumber: (state) => {
            state.lottoNumbers = initialGroup;
        },
        changeIsLuckyNumber: (state) => {
            state.isLuckyNumber = !state.isLuckyNumber;
        },
        changeManualNumber: (state, action: PayloadAction<{ index: number; number: number }>) => {
            const {index, number} = action.payload;
            if (state.manualNumber[index]) {

                state.manualNumber[index] = {number: number, color: colorSetting(number), isOpen: false};
            }
        }
    }
})

export const {
    generateLuckyNumber,
    resetBaseNumber,
    luckyNumberOpen,
    setMainLottoNumber,
    setMainLottoNumberAll,
    resetMainLottoNumber,
    changeIsLuckyNumber,
    changeManualNumber
} = lottoNumberSlice.actions


export default lottoNumberSlice.reducer