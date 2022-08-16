import styled from 'styled-components';
import { colors } from '../colors';
import { media } from '../media';

export const StyledOrderSummaryBlock = styled.div`
  background-color: ${colors.backgroundSecondary};
  width: 40%;
  padding: 30px 10px;
  position: relative;
  @media (max-width: ${media.xs}) {
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
`;
export const TotalPrice = styled.div`
  color: ${colors.textMain};
  font-weight: bold;
  padding-top: 10px;
  @media (max-width: ${media.xs}) {
    padding: 10px 10% 0;
    margin-bottom: 20px;
    order: 3;
  }
`;
