import random from 'random';
import { Lotto } from '../common/interface';

/**
 * 내부에서만 사용 되는 <br>
 * 1개의 랜덤 번호(1~45)를 생성하는 메서드
 */
const _generateBaseLottoNumber = () => {
  return random.int(1, 45);
};

/**
 * 한개의 번호를 받아 <br>
 * 해당 번호에 맞는 색의 값을 반환해주는 메서드
 */
export const colorSetting = (number: number) => {
  if (number <= 10) {
    return '#f2b526';
  } else if (number <= 20) {
    return '#3d74ad';
  } else if (number <= 30) {
    return '#de4c10';
  } else if (number <= 40) {
    return '#9295a4';
  } else {
    return '#2eaa62';
  }
};

/**
 * 숫자를 배열로 받아 <br>
 * 총 6개의 정렬 된 숫자배열을 반환한다.
 */
const _generateSortBaseLottoNumbers = (lottoNumber: Lotto[]) => {
  // 중복값 제거를 위한 set 을 설정
  const lottoNumbers: Set<number> = new Set();

  // 매개변수로 들어온 배열의 값이 있다면 set 에 추가
  if (lottoNumber !== undefined && lottoNumber.length > 0) {
    for (const item of lottoNumber) {
      lottoNumbers.add(item.number);
    }
  }

  // set 에 6개의 번호가 만들어질때까지 반복
  while (lottoNumbers.size < 6) {
    lottoNumbers.add(_generateBaseLottoNumber());
  }

  // 정렬해서 배열로 만들고 리턴
  return Array.from(lottoNumbers).sort((a, b) => a - b);
};

/**
 * 숫자를 배열로 받아 <br>
 * 총 6개의 정렬 되지 않는 숫자배열을 반환한다.
 */
const _generateUnsortedBaseLottoNumbers = () => {
  // 중복값 제거를 위한 set 을 설정
  const lottoNumbers: Set<number> = new Set();

  // set 에 6개의 번호가 만들어질때까지 반복
  while (lottoNumbers.size < 6) {
    lottoNumbers.add(_generateBaseLottoNumber());
  }

  // 배열로 만들고 리턴
  return Array.from(lottoNumbers);
};

/**
 * 완성된 로또( number, color, isOpen )를 <br>
 * 6개 포함하고있는 정렬 된 배열을 반환한다
 */
export const generateSortLottoNumbers = (lottoNumber: Lotto[]) => {
  const lottoNumbers: number[] = _generateSortBaseLottoNumbers(lottoNumber);
  return lottoNumbers.map((item) => {
    return {
      number: item,
      color: colorSetting(item),
      isOpen: true,
    };
  });
};

/**
 * 완성된 로또( number, color, isOpen )를 <br>
 * 6개 포함하고있는 정렬 되지 않은 배열을 반환한다
 */
export const generateUnsortedLottoNumbers = () => {
  const lottoNumbers: number[] = _generateUnsortedBaseLottoNumbers();
  return lottoNumbers.map((item) => {
    return {
      number: item,
      color: colorSetting(item),
      isOpen: false,
    };
  });
};
