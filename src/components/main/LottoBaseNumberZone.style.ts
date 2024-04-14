import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  height: 80px;
  margin: 10px 0;
  background-color: #ffffff;
`;

export const Container = styled.div`
  width: 470px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: -5px;
`;

export const ContainerNumberType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 60px;
`;

export const ContainerNumberTypeSub = styled.div`
  display: flex;
  width: 440px;
  height: 60px;
`;

export const ContainerNumberTypeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 60px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

export const ContainerIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20px;
  height: 60px;
  gap: 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ParagraphTop = styled.p`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  margin-left: 8px;
  margin-right: -8px;
  color: #4d4d4d;
`;

export const ParagraphBottom = styled.p`
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  margin-left: 8px;
  margin-right: -8px;
  color: #4d4d4d;
`;

export const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  margin-left: -5px;
  margin-right: 5px;
`;

export const BoxIndicator = styled.div<{ $isCheck: boolean }>`
  height: 20px;
  width: 4px;
  box-sizing: border-box;
  background-color: ${(props) => (props.$isCheck ? '#ff6600' : '#f3f5f6')};
  border: ${(props) => (props.$isCheck ? 'none' : '1px solid #f0f0f0')};
  border-radius: 2px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 72px;
  height: 36px;
  background-color: #f5f5f5;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  color: #808080;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
