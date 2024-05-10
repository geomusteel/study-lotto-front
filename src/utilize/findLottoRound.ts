export function findLottoRound(): number {
  // 로또 1회 추첨일
  const firstLottoDate: Date = new Date(2002, 11, 7); // 월은 0부터 시작하므로 12월은 11입니다.
  const now: Date = new Date();

  // 두 날짜 사이의 밀리초 단위 시간 차이
  const diffTime: number = Math.abs(now.getTime() - firstLottoDate.getTime());

  // 밀리초를 일 단위로 변환
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 로또는 주 1회 추첨이므로 일 수를 7로 나누어 회차를 계산
  return Math.floor(diffDays / 7) + 1;
}
