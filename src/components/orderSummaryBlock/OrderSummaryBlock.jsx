import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductListAC } from '../../redux/order-reducer';

import Title from '../../styled/StyledTitle';
import { ProductInBasket } from '../index';
import Flex from '../../styled/StyledFlex';
import {
  OrderInfoBlock,
  StyledOrderSummaryBlock,
  TotalPrice,
} from '../../styled/orderSummaryBlock/StyledOrderSummaryBlock';

const OrderSummaryBlock = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.orderReducer.productList);

  useEffect(() => {
    dispatch(fetchProductListAC());
  }, []);

  const getSubtotal = productsList.reduce((total, product) => total + product.price * product.quantity, 0);

  const getShipping = productsList.length !== 0 ? productsList.length * 5 : 0;

  return (
    <StyledOrderSummaryBlock>
      <Title margin="0 0 10px 0">Order Summary</Title>
      {productsList.map((el) => {
        return <ProductInBasket key={el.name} props={el} />;
      })}
      <OrderInfoBlock>
        <Flex margin="0 0 5px 0" justify="space-between">
          <Title size="14px" color="grey">
            Subtotal
          </Title>
          <Title size="14px" color="grey" famaly="Arial">
            ${getSubtotal}
          </Title>
        </Flex>

        <Flex margin="0 0 5px 0" justify="space-between">
          <Title size="14px" color="grey">
            Shipping
          </Title>
          <Title size="14px" color="grey" famaly="Arial">
            ${getShipping}
          </Title>
        </Flex>

        <Flex margin="0 0 5px 0" justify="space-between">
          <Title size="14px" color="grey">
            Taxes
          </Title>
          <Title size="14px" color="grey" famaly="Arial">
            ${getSubtotal * 0.2}
          </Title>
        </Flex>
      </OrderInfoBlock>
      <TotalPrice>
        <Flex justify="space-between">
          <Title weight="bold" size="14px" color="darckviolet">
            Total
          </Title>
          <Title size="14px" color="darckviolet" weight="bold" famaly="Arial">
            ${getSubtotal + getSubtotal * 0.2 + getShipping}
          </Title>
        </Flex>
      </TotalPrice>

      <Title
        size="10px"
        color="grey"
        margin="200px 0 0 0"
        style={{ position: 'absolute', bottom: '5px', right: '20px' }}
      >
        All purchases are subject to our&nbsp;
        <span style={{ textDecoration: 'underline' }}>Terms and Conditions.</span>
      </Title>
    </StyledOrderSummaryBlock>
  );
};

export default OrderSummaryBlock;
