import React from 'react';

import Title from '../../styled/StyledTitle';
import { StyledProduct } from '../../styled/orderSummaryBlock/StyledProductInBasket';

const ProductInBasket = ({ props }) => (
  <StyledProduct>
    <img src={props.img} alt={'Something is wrong with picture'} />

    <div style={{ width: '64%' }}>
      <Title size="16px" color="gray" margin="0 0 2px 0">
        {props.name}
      </Title>
      <Title size="14px" color="black" margin="0 0 2px 0">
        {props.summary}
      </Title>
      <Title size="14px" color="black" margin="0 0 2px 0">
        Quantity: {props.quantity}
      </Title>
    </div>

    <div>
      <Title size="12px" famaly="Arial" color="grey" margin="0 0 2px 0">
        ${props.price}
      </Title>
    </div>
  </StyledProduct>
);

export default ProductInBasket;
