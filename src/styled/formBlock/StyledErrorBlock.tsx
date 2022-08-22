import styled from 'styled-components';
import { colors } from '../colors';

export const StyledErrorBlock = styled.div`
  display: flex;
  height:24px;
  align-items:center;
  font-size:14px;
  position: absolute;
  background-color: ${colors.backgroundMain};
  padding: 2px 10px;
  color: ${colors.danger};
  box-shadow:2px 2px 2px 2px ${colors.secondary};;
  border-radius: 5px;
...props.style`;
