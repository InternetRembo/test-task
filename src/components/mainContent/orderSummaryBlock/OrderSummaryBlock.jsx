import React from 'react';
import styled from "styled-components";
import Title from "../../assets/StyledTitle";
import ProductInBasket from "./ProductInBasket/ProductInBasket";

const StyledOrderSummaryBlock = styled.div`
  background-color: #f5f1fc;
  width: 40%;
  padding: 30px 10px;


`

const OrderInfoBlock = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid grey;
  color: grey;
`
const TotalPrice = styled.div`
  color: #4a0885;
  font-weight: bold;
  padding-top: 10px;
`
const OrderParam = styled.div`
  display: flex;
  justify-content: space-between;
  
`

const OrderSummaryBlock = (props) => {
    return <StyledOrderSummaryBlock>
        <Title>Order Summary</Title>
        <ProductInBasket/>
        <ProductInBasket/>
        <ProductInBasket/>

        <OrderInfoBlock>
            <OrderParam>
                <div>Subtotal</div>
                <div>14</div>
            </OrderParam>

            <OrderParam>
                <div>Shipping</div>
                <div>20</div>
            </OrderParam>

            <OrderParam>
                <div>Taxes</div>
                <div>45</div>
            </OrderParam>
        </OrderInfoBlock>

        <TotalPrice>
            <OrderParam>
                <div>Total</div>
                <div>sum</div>
            </OrderParam>
        </TotalPrice>

    </StyledOrderSummaryBlock>
}

export default OrderSummaryBlock;