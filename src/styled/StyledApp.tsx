import styled from 'styled-components';
import { colors } from './colors';

export const AppWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: ${colors.appBackground};
  @media (max-width: 576px) {
    padding: 0 30px;
  }
`;
