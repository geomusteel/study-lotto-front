import random from "random";

interface LottoNumber {
    number: number,
    color: string,
    isOpen: boolean
}


const _generateBaseLottoNumber = () => {
    return random.int(1, 45);
}

const _generateSortBaseLottoNumbers = (lottoNumber: LottoNumber[]) => {
    const lottoNumbers: Set<number> = new Set();

    if (lottoNumber !== undefined && lottoNumber.length > 0) {
        for (const item of lottoNumber) {
            lottoNumbers.add(item.number)
        }
    }

    while (lottoNumbers.size < 6) {
        lottoNumbers.add(_generateBaseLottoNumber());
    }

    return Array.from(lottoNumbers).sort((a, b) => a - b);
}

const _generateUnsortedBaseLottoNumbers = () => {
    const lottoNumbers: Set<number> = new Set();

    while (lottoNumbers.size < 6) {
        lottoNumbers.add(_generateBaseLottoNumber());
    }

    return Array.from(lottoNumbers);
}

const _colorSetting = (number: number) => {
    if (number <= 10) {
        return "#f2b526";
    } else if (number <= 20) {
        return "#3d74ad";
    } else if (number <= 30) {
        return "#de4c10";
    } else if (number <= 40) {
        return "#9295a4"
    } else {
        return "#2eaa62"
    }
}

export const generateSortLottoNumbers = (lottoNumber: LottoNumber[]) => {
    const lottoNumbers: number[] = _generateSortBaseLottoNumbers(lottoNumber);
    return lottoNumbers.map((item) => {
        return {
            number: item,
            color: _colorSetting(item),
            isOpen: true
        }
    })
}

export const generateUnsortedLottoNumbers = () => {
    const lottoNumbers: number[] = _generateUnsortedBaseLottoNumbers();
    return lottoNumbers.map((item) => {
        return {
            number: item,
            color: _colorSetting(item),
            isOpen: false
        }
    })
}