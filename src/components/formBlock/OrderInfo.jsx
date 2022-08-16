import React from 'react';

import { StyledFormBlock, Title } from '../../styled';

let billingData = localStorage.getItem('billingData');

billingData = JSON.parse(billingData);

let userEmail = billingData ? billingData.email : 'email';

const OrderInfo = () => (
  <StyledFormBlock padding="40px 30px 0 30px">
    <Title margin="10px 0 10px 0" size="26px" weight="200">
      Thank you for your order!
    </Title>

    <Title margin="30px 0 10px 0" size="18px" color="black" weight="bold">
      Order number is: 12241
    </Title>

    <Title margin="10px 0 10px 0" size="16px" color="black" weight="200">
      Your will recieve an email confirmation shortly to: &nbsp;
      <Title size="16px" decoration="underline" color="blueviolet">
        {userEmail}
      </Title>
    </Title>

    <Title margin="30px 0 30px 0" size="18px" color="black" weight="200">
      Estimated delivery day is <br />
      <Title size="18px" weight="bold">
        Friday 2 April 2022
      </Title>
    </Title>

    <Title
      display="block"
      onClick={() => {
        window.print();
      }}
      margin="10px 0 10px 0"
      size="14px"
      color="blueviolet"
      decoration="underline"
      weight="bold"
    >
      Print recipe
    </Title>
  </StyledFormBlock>
);

export default OrderInfo;
