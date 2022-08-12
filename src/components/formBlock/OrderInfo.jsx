import React from 'react';

import Title from '../../styled/StyledTitle';
import { StyledFormBlock } from '../../styled/formBlock/StyledFormBlock';

let billingData = localStorage.getItem('billingData');
billingData = JSON.parse(billingData);

let userEmail = billingData.email;

const OrderInfo = () => (
  <StyledFormBlock style={{ paddingTop: '40px' }}>
    <Title margin="10px 0 10px 0" size="26px" weight="200">
      Thank you for your order!
    </Title>

    <Title margin="30px 0 10px 0" size="18px" color="black" weight="bold">
      Order number is: 12241
    </Title>

    <Title margin="10px 0 10px 0" size="16px" color="black" weight="200">
      Your will recieve an email confirmation shortly to: &nbsp;
      <span style={{ textDecoration: 'underline', color: 'blueviolet' }}>{userEmail}</span>
    </Title>

    <Title margin="30px 0 30px 0" size="18px" color="black" weight="200">
      Estimated delivery day is <br /> <span style={{ fontWeight: 'bold' }}> Friday 2 April 2022 </span>
    </Title>

    <Title
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
