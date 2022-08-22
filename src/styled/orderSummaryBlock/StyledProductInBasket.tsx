import styled from 'styled-components';
import { colors } from '../colors';
import { media } from '../media';

export const StyledProduct = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
  @media (max-width: ${media.xs}) {
    width: 100%;
    padding: 0 20px;
    height: 160px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.secondary};
    margin-bottom: 5px;
  }

  img {
    border: 1px solid ${colors.secondary};
    padding: 2px;
    width: 50px;
    height: 50px;
    @media (max-width: ${media.md}) {
      align-self: center;
      border: none;
    }
    @media (max-width: ${media.xs}) {
      width: 85px;
      height: 85px;
    }
  }
`;
