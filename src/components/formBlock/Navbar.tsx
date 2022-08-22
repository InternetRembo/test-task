import React from 'react';
import { Nav } from 'react-bootstrap';

import { Arrow, Flex, StyledLink } from '../../styled';

const NavigationBar = () => (
  <Nav className="mb-3" defaultActiveKey="shipping">
    <Flex aling="center">
      <StyledLink data-testid="shippingLink" to={'/'}>
        Shipping
      </StyledLink>
      <Arrow />
      <StyledLink data-testid="billingLink" to={'/billing'}>
        Billing
      </StyledLink>
      <Arrow />
      <StyledLink data-testid="paymentLink" to={'/payment'}>
        Payment
      </StyledLink>
    </Flex>
  </Nav>
);

export default NavigationBar;
