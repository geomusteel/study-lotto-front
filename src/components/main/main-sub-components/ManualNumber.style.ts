import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 60px;
  gap: 8px;
`;

export const Wrapper = styled.div<{
  $color: string;
  $isOpen: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  border: ${(props) => (props.$isOpen ? 'none' : '1px solid #f0f0f0')};

  background-color: ${(props) => props.$color};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  transition: 0.1s ease;
`;

export const Input = styled.input<{ $color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  box-sizing: border-box;
  font-family: 'TheJamsil5Bold', serif;
  font-weight: 700;
  border: none;
  background-color: ${(props) => props.$color};
  outline: none;

  &:focus {
    border: 2px solid #e6e6e6;
    color: #4c4c4c;
    background-color: white;
  }
`;
