import styled from 'styled-components';
import { colors } from '../colors';

export const StyledOrderSummaryBlock = styled.div`
  background-color: ${colors.backgroundSecondary};
  width: 40%;
  padding: 30px 10px;
  position: relative;
  @media (max-width: 576px) {
    width: 90vw;
    height: 100%;
    text-align: center;
  }
  @media print {
    margin-top: 100px;
  }
`;
export const OrderInfoBlock = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: ${colors.secondary};
  color: ${colors.secondary};
  @media (max-width: 610px) {
    padding: 0 10% 0 10%;
  }
`;
export const TotalPrice = styled.div`
  color: ${colors.textMain};
  font-weight: bold;
  padding-top: 10px;
  @media (max-width: 576px) {
    padding: 10px 10% 0;
    margin-bottom: 20px;
    order: 3;
  }
`;
