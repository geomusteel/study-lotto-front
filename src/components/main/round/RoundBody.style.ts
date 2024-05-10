import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 540px;
  height: 540px;
  background-color: #ffffff;
  padding: 30px 20px;
  gap: 20px;
`;

export const ContainerRoundSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 280px;
  height: 100px;
  //background-color: coral;
  gap: 28px;
`;

export const ParagraphRoundHeader = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #4d4d4d;
`;

export const ParagraphRoundDate = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: #4d4d4d;
`;

export const BoxRoundNumber = styled.div<{
  $color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #f0f0f0;
  background-color: ${(props) => props.$color};
  color: #ffffff;
  font-size: 20px;
  box-sizing: border-box;
  font-family: 'TheJamsil5Bold', serif;
  font-weight: 700;
`;

export const ContainerNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 532px;
  height: 72px;
  border-radius: 36px;
  box-sizing: border-box;
  border: 2px solid #e5e5e5;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ParagraphPlus = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #4d4d4d;
`;

export const Table = styled.table`
  border-collapse: separate;

  border: 2px solid #e5e5e5;
  border-spacing: 0;
  border-radius: 20px;
  overflow: hidden;
`;

export const Td = styled.td<{ $header?: boolean; $pointColor?: boolean }>`
  width: ${(props) => (props.$header ? '180px' : '260px')};
  height: 40px;
  background-color: ${(props) => (props.$header ? '#F2F2F2' : '#ffffff')};
  padding: 8px 20px;
  border-bottom: 2px solid #ddd;

  text-align: left;
  vertical-align: middle;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: bold;

  color: ${(props) => (props.$pointColor ? '#FF6600' : '#4d4d4d')};

  tr:last-child & {
    border-bottom: none; // 마지막 행의 모든 td의 하단 보더 제거
  }
  &:last-child {
    text-align: right;
    border-left: 2px solid #ddd; // 모든 행의 마지막 td의 오른쪽 보더 제거
  }
`;
