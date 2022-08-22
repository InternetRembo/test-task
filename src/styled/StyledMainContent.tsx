import styled from 'styled-components';
import { colors } from './colors';
import { media } from './media';

export const StyledMainContent = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 580px;
  width: 80vw;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  box-shadow: 1px 1px 1px ${colors.secondaryLight};
  @media (max-width: ${media.sm}) {
    width: 90vw;
    height: 800px;
  }
  @media (max-width: ${media.xs}) {
    flex-direction: column;

    min-width: 100%;
    height: 100%;
  }
`;
