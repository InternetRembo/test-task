import styled from 'styled-components';
import { colors } from './colors';

export const StyledHeader = styled.div`
  margin: 0 auto 40px;
  padding: 10px 150px;
  border-bottom: 1px solid ${colors.main};
  background-color: ${colors.backgroundMain};
  width: 90vw;
  max-width: 1000px;
  height: 50px;
  box-shadow: 1px 1px 1px ${colors.secondaryLight};
  font-size: 18px;
  color: ${colors.textHeader};
  @media (max-width: 768px) {
    padding: 10px 50px;
    font-size: 14px;
  }
  @media (max-width: 576px) {
    padding: 10px 20px;
  }
`;
