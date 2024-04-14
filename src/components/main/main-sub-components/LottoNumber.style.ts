import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 532px;
  height: 72px;
  border-radius: 36px;
  box-sizing: border-box;
  border: 2px solid #e5e5e5;
`;

export const ParagraphIndex = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  margin-left: 10px;
  margin-right: -10px;
  font-size: 40px;
  font-family: 'TheJamsil5Bold', serif;
  color: #4d4d4d;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BoxDivider = styled.div`
  height: 40px;
  width: 2px;
  background-color: #f3f5f6;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  margin-left: -10px;
  margin-right: 10px;
  transition: 0.1s ease;
  color: #4d4d4d;
  font-size: 30px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    color: #505050;
    transform: scale(1.05);
  }
`;

export const ContainerLottoNumber = styled.div`
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
  transition: 0.15s ease;
`;
