import React from 'react';
import styled from "styled-components";
import Title from "../../reusableComponents/StyledTitle";
import ProductInBasket from "./ProductInBasket/ProductInBasket";
import StyledTitle from "../../reusableComponents/StyledTitle";
import Flex from "../../reusableComponents/Flex";

const StyledOrderSummaryBlock = styled.div`
  background-color: #f5f1fc;
  width: 40%;
  padding: 30px 10px;
  position: relative;
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

const OrderSummaryBlock = (props) => {
    return <StyledOrderSummaryBlock>

        <Title margin='0 0 10px 0'>Order Summary</Title>
        <ProductInBasket/>
        <ProductInBasket/>
        <ProductInBasket/>

        <OrderInfoBlock>
            <Flex justify='space-between'>
                <Title size='14px' color='grey'>Subtotal</Title>
                <Title size='14px' color='grey' famaly='Arial'>$30</Title>
            </Flex>

            <Flex justify='space-between'>
                <Title  size='14px' color='grey'>Shipping</Title>
                <Title size='14px' color='grey' famaly='Arial' >$5</Title>
            </Flex>

            <Flex justify='space-between'>
                <Title  size='14px' color='grey'>Taxes</Title>
                <Title size='14px' color='grey'  famaly='Arial'>$35</Title>
            </Flex>
        </OrderInfoBlock>

        <TotalPrice>
            <Flex justify='space-between'>
                <Title  weight='bold' size='14px' color='darckviolet'>Total</Title>
                <Title size='14px' color='darckviolet' weight='bold' famaly='Arial'>sum</Title>
            </Flex>
        </TotalPrice>

        <StyledTitle size='10px'
                     color='grey'
                     style={{position:'absolute' , bottom:'5px' , right:'10px'}}>
            All purchases are subject to our&nbsp;<a style={{textDecoration:'underline'}}>Terms and Conditions.</a>
        </StyledTitle>
    </StyledOrderSummaryBlock>
}
export default OrderSummaryBlock;