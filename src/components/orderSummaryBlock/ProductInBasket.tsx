import React from 'react';

import Title from '../../styled/StyledTitle';
import { StyledProduct, StyledBox } from '../../styled';

type ProductProps = {
  img: string;
  name: string;
  summary: string;
  quantity: number;
  price: number;
};

const ProductInBasket = ({ img, name, summary, quantity, price }: ProductProps) => {
  return (
    <StyledProduct data-testid="ProductInBasket">
      <img src={img} alt={'Something is wrong'} />

      <StyledBox width="64%">
        <Title display="block" size="16px" color="gray" margin="0 0 2px 0">
          {name}
        </Title>
        <Title display="block" size="14px" color="black" margin="0 0 2px 0">
          {summary}
        </Title>
        <Title display="block" size="14px" color="black" margin="0 0 2px 0">
          Quantity: {quantity}
        </Title>
      </StyledBox>

      <div>
        <Title size="12px" famaly="Arial" color="grey" margin="0 0 2px 0">
          ${price}
        </Title>
      </div>
    </StyledProduct>
  );
};

export default ProductInBasket;
