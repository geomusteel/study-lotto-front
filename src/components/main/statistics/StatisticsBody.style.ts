import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    height: 690px;
    width: 580px;
    background-color: #ffffff;
    overflow-y: scroll;

    /* 스크롤바 전체의 스타일 */

    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바의 너비 */
        border-radius: 8px; /* 스크롤바의 둥근 모서리 */
    }

    /* 스크롤바 트랙 (스크롤바 배경) */

    &::-webkit-scrollbar-track {
        background: #ffffff; /* 트랙의 배경 색상 */
        border-radius: 8px; /* 트랙의 둥근 모서리 */
        margin: 10px 0
    }

    /* 스크롤바 핸들 (움직이는 부분) */

    &::-webkit-scrollbar-thumb {
        background: #f0f0f0; /* 핸들의 색상 */
        border-radius: 8px; /* 핸들의 둥근 모서리 */

        /* 핸들 위에 마우스를 올렸을 때의 스타일 */

        &:hover {
            background: #d8d8d8; /* 마우스 호버 시 핸들 색상 변경 */
        }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  min-height: 60px;
  width: 540px;
  margin-left: 12px;
  gap: 8px;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #ffffff;

  font-size: 16px;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #4d4d4d;
  background-color: #f3f5f6;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BoxMinMax = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  height: 30px;
  padding: 0 20px;
  border-radius: 4px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 700;

  color: #4d4d4d;
  background-color: #f3f5f6;
`;
