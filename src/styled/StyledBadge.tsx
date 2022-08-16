import styled from 'styled-components';
import { colors } from './colors';

export type BadgeProps = {
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  bgColor?: string;
};

export const StyledBadge = styled.span<BadgeProps>`
  background-color: ${({ bgColor }) => bgColor || colors.danger};
  display: flex;
  align-items: center;
  font-family: Arial;
  font-size: 10px;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  color: ${colors.backgroundMain};
  width: ${({ width }) => width || '15px;'};
  height: ${({ height }) => height || '15px;'};
  position: absolute;
  top: ${({ top }) => top || '-5px'};
  right: ${({ right }) => right || '-10px'};
`;
