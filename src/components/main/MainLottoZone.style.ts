import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 580px;
  flex-direction: column;
  background-color: #ffffff;
  gap: 12px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 532px;
  height: 72px;
  gap: 20px;
`;

export const ParagraphHeader = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 524px;
  height: 60px;
  font-size: 40px;
  font-family: 'TheJamsil5Bold', serif;
  color: #4c4c4c;
`;

export const Button = styled.button<{ $color?: string }>`
  width: 164px;
  height: 48px;
  background-color: ${(props) => (props.$color ? props.$color : '#f5f5f5')};
  border-radius: 24px;
  border: 1px solid #f0f0f0;
  color: ${(props) => (props.$color ? '#ffffff' : '#4d4d4d')};
  font-size: 24px;
  font-family: 'TheJamsil3Regular', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
