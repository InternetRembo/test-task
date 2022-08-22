import React, { ReactElement } from 'react';
import styled from 'styled-components';

type TitleProps = {
  size?: string;
  weight?: string;
  style?: string;
  famaly?: string;
  color?: string;
  margin?: string;
  decoration?: string;
  display?: string;
  position?: string;
  bottom?: string | number;
  right?: string | number;
  children?: string | number | ReactElement | (string | ReactElement | JSX.Element | number)[];
  onClick?: () => void;
};

const StyledTitle = styled.span<TitleProps>`
  font-size: ${(props) => props.size || '18px'};
  font-weight: ${(props) => props.weight || 'normal'};
  font-style: ${(props) => props.style || 'normal'};
  font-family: ${(props) => props.famaly || 'Alef'};
  color: ${(props) => props.color || ' #7a11d2'};
  margin: ${(props) => props.margin || '0'};
  text-decoration: ${(props) => props.decoration || 'none'};
  display: ${(props) => props.display || 'inline-block'};
  position: ${(props) => props.position || 'static'};
  bottom: ${(props) => props.bottom || '0'};
  right: ${(props) => props.bottom || '0'};
`;

const Title = (props: TitleProps) => {
  return <StyledTitle {...props} />;
};

export default Title;
