import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const StyledButton = styled.button`
  color: ${colors.backgroundMain};
  background-color: ${colors.textMain};
  width: 200px;
  height: 46px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 576px) {
    width: 100%;
    align-self: center;
  }
`;

type ButtonProps = {
  children: string;
};

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
