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

export const BoxCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #ffffff;
  box-sizing: border-box;
  font-size: 24px;
  font-family: 'TheJamsil3Regular', serif;
  color: #ff983f;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BoxColon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  font-size: 24px;
  font-family: 'GmarketSansMedium', serif;
  font-weight: bold;
  color: #999999;
`;
