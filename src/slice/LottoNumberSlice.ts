import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  colorSetting,
  generateSortLottoNumbers,
  generateUnsortedLottoNumbers,
} from '../utilize/generateLottoNumbers';
import { Lotto, LottoGroups, LottoState } from '../common/interface';
import { findLottoRound } from '../utilize/findLottoRound';

const initialItem: Lotto[] = [
  { number: 0, color: '#f3f5f6', isOpen: false },
  { number: 0, color: '#f3f5f6', isOpen: false },
  { number: 0, color: '#f3f5f6', isOpen: false },
  { number: 0, color: '#f3f5f6', isOpen: false },
  { number: 0, color: '#f3f5f6', isOpen: false },
  { number: 0, color: '#f3f5f6', isOpen: false },
];

const initialGroup: LottoGroups = [
  initialItem,
  initialItem,
  initialItem,
  initialItem,
  initialItem,
];

const initialState: LottoState = {
  luckyNumber: generateUnsortedLottoNumbers(),
  manualNumber: initialItem,
  lottoNumbers: initialGroup,
  isLuckyNumber: true,
  currentDraw: findLottoRound(),
};

export const lottoNumberSlice = createSlice({
  name: 'lottoNumber',
  initialState: initialState,
  reducers: {
    /**
     * 정렬되지 않는 LuckyNumber 를 <br>
     * 생성한다
     */
    generateLuckyNumber: (state) => {
      state.luckyNumber = generateUnsortedLottoNumbers();
    },
    /**
     * LuckyNumber 클릭시 <br>
     * 번호를 open & close 해준다
     */
    luckyNumberOpen: (state, action: PayloadAction<Lotto>) => {
      state.luckyNumber = state.luckyNumber.map((item) => {
        if (item.number === action.payload.number) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      });
    },
    /**
     * isLuckyNumber 의 상태를 변경한다
     */
    changeIsLuckyNumber: (state) => {
      state.isLuckyNumber = !state.isLuckyNumber;
    },
    /**
     * luckyNumber 또는 manualNumber 을<br>
     * 초기화 해준다
     */
    resetBaseNumber: (state) => {
      // isLuckyNumber 값에 따라 다르게 처리한다
      if (state.isLuckyNumber) {
        state.luckyNumber = generateUnsortedLottoNumbers();
      } else {
        state.manualNumber = initialItem;
      }
    },
    /**
     * luckyNumber 또는 manualNumber 을<br>
     * 기준으로 메인 로또 번호를 한줄 생성한다
     */
    setMainLottoNumber: (state, action: PayloadAction<number>) => {
      if (state.isLuckyNumber) {
        const openValue = state.luckyNumber.filter((item) => item.isOpen);
        state.lottoNumbers[action.payload] =
          generateSortLottoNumbers(openValue);
      } else {
        const openValue = state.manualNumber.filter(
          (item) => item.number !== 0,
        );
        state.lottoNumbers[action.payload] =
          generateSortLottoNumbers(openValue);
      }
    },
    /**
     * luckyNumber 또는 manualNumber 을<br>
     * 기준으로 메인 로또 번호를 모든줄 생성한다
     */
    setMainLottoNumberAll: (state) => {
      if (state.isLuckyNumber) {
        const openValue = state.luckyNumber.filter((item) => item.isOpen);
        const newValue: LottoGroups = [];
        for (let i = 0; i < 5; i++) {
          newValue.push(generateSortLottoNumbers(openValue));
        }
        state.lottoNumbers = newValue;
      } else {
        const openValue = state.manualNumber.filter(
          (item) => item.number !== 0,
        );
        const newValue: LottoGroups = [];
        for (let i = 0; i < 5; i++) {
          newValue.push(generateSortLottoNumbers(openValue));
        }
        state.lottoNumbers = newValue;
      }
    },
    /**
     * 생성된 모든 메인 로또 번호를 초기화한다.
     */
    resetMainLottoNumber: (state) => {
      state.lottoNumbers = initialGroup;
    },
    /**
     * manual 모드에서의 번호 입력을 해준다
     */
    changeManualNumber: (
      state,
      action: PayloadAction<{ index: number; number: number }>,
    ) => {
      const { index, number } = action.payload;
      if (state.manualNumber[index]) {
        state.manualNumber[index] = {
          number: number,
          color: colorSetting(number),
          isOpen: false,
        };
      }
    },
  },
});

export const {
  generateLuckyNumber,
  resetBaseNumber,
  luckyNumberOpen,
  setMainLottoNumber,
  setMainLottoNumberAll,
  resetMainLottoNumber,
  changeIsLuckyNumber,
  changeManualNumber,
} = lottoNumberSlice.actions;

export default lottoNumberSlice.reducer;
