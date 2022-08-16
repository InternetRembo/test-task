import styled from 'styled-components';
import { colors } from '../colors';

export const StyledProduct = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
  @media (max-width: 700px) {
    height: 194px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 0 20px;
    height: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.secondary};
    margin-bottom: 5px;
  }

  img {
    border: 1px solid ${colors.secondary};
    padding: 2px;
    width: 50px;
    height: 50px;
    @media (max-width: 700px) {
      align-self: center;
      border: none;
    }
    @media (max-width: 576px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 410px) {
      width: 70px;
      height: 70px;
    }
  }
`;
