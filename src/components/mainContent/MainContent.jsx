import React from 'react';
import styled from "styled-components";
import ShopingBlock from "./shopingBlock/ShopingBlock";
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
const MainContent = (props) => {
    return <StyledMainContent>

        <ShopingBlock/>
        <OrderSummaryBlock/>

          </StyledMainContent>
}

export default MainContent;