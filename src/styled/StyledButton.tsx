import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';
import { media } from './media';

const StyledButton = styled.button`
  color: ${colors.backgroundMain};
  background-color: ${colors.textMain};
  width: 200px;
  height: 46px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: ${media.xs}) {
    width: 100%;
    align-self: center;
  }
`;

type ButtonProps = {
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
