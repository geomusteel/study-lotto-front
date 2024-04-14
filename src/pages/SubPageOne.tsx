import React from 'react';
import styled from 'styled-components';
import { FlexCenterDivision } from '../common/div/FlexCenterDivision';

const Wrapper = styled(FlexCenterDivision)`
  width: 580px;
  height: 908px;
  background-color: #ffffff;
`;

const SubPageOne = () => {
  return <Wrapper>todo1</Wrapper>;
};

export default SubPageOne;
