import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type FlexProps = {
  direction?: string;
  aling?: string;
  justify?: string;
  margin?: string;
  width?: string;
  children?: ReactElement[] | JSX.Element[] | string | (string | JSX.Element)[];
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.aling || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || 'none'};
`;

const Flex = (props: FlexProps) => {
  return <StyledFlex {...props} />;
};

export default Flex;