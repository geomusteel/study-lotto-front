import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 100px;
  background-color: #ffffff;
  gap: 24px;
  box-shadow: 0 -8px 12px -12px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled(NavLink)<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  color: ${(props) => (props.$isActive ? '#ff6600' : '#4d4d4d')};
  font-size: 40px;
  gap: 8px;

  &:link {
    transition: 0.1s;
    text-decoration: none;
  }

  & p {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
`;
