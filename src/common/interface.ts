export interface Lotto {
    number: number,
    color: string,
    isOpen: boolean
}

export type LottoGroup = Lotto[];
export type LottoGroups = LottoGroup[];

export interface LottoState {
    luckyNumber: Lotto[]
    manualNumber: Lotto[]
    lottoNumbers: LottoGroups
    isLuckyNumber: boolean
    currentDraw: number
}

export interface TimeParts {
    days: string;
    hours: string[];
    minutes: string[];
    seconds: string[];
}