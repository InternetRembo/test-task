import styled from 'styled-components';
import { colors } from './colors';

export const Arrow = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-top: 1px solid ${colors.secondary};
  border-right: 1px solid ${colors.secondary};
  transform: rotate(50deg);
  margin-right: 15px;
`;
