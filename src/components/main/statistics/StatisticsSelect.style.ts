import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 580px;
  box-sizing: border-box;
  border-top: 1px solid #d8d8d8;
  background-color: #f3f5f6;
  gap: 8px;
`;

export const BoxSelect = styled.div<{ $isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-sizing: border-box;
  font-size: 24px;
  font-family: 'TheJamsil3Regular', serif;
  color: ${(props) => (props.$isSelect ? '#ff6600' : '#4d4d4d')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;
