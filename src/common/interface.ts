export interface Lotto {
    number: number,
    color: string,
    isOpen: boolean
}

export type LottoGroup = Lotto[];
export type LottoGroups = LottoGroup[];
export type isLuckyNumberView = 'luckyNumber' | 'manualNumber'

export interface LottoState {
    luckyNumber: Lotto[]
    manualNumber: Lotto[]
    lottoNumbers: LottoGroups
    isLuckyNumberView: isLuckyNumberView
    currentDraw: number
}