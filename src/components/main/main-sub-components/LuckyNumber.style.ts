import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 60px;
  gap: 8px;
`;

export const BoxRoundNumber = styled.div<{
  $color: string;
  $isOpen: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: ${(props) => (props.$isOpen ? 'none' : '1px solid #f0f0f0')};
  background-color: ${(props) => (props.$isOpen ? props.$color : '#f3f5f6')};
  color: #ffffff;
  font-size: 20px;
  box-sizing: border-box;
  font-family: 'TheJamsil5Bold', serif;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  transition: 0.1s ease;

  &:active {
    transform: scale(1.15);
  }
`;
