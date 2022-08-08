import React from 'react';
import styled from "styled-components";
import ShippingBlock from "./shippingBlock/ShippingBlock"
import OrderSummaryBlock from "./orderSummaryBlock/OrderSummaryBlock";

const StyledMainContent = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 580px;
  width: 680px;
  margin: 0 auto;
  display: flex;
  box-shadow: 1px 1px 1px #bebdbd;
`;
export const StyledFormBlock = styled.div`
  background-color: white;
  width: 60%;
  height: 100%;
  padding: 15px 30px;
  font-family: Alef;
`

const MainContent = (props) => {
    return <StyledMainContent>

        <ShippingBlock/>
        <OrderSummaryBlock/>

          </StyledMainContent>
}

export default MainContent;