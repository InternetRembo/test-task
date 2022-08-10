import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: blueviolet;
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

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
