import React from 'react';
import { Nav } from 'react-bootstrap';

import { Arrow, Flex, StyledLink } from '../../styled';

const NavigationBar = () => (
  <Nav className="mb-3" defaultActiveKey="shipping">
    <Flex aling="center">
      <StyledLink to={'/'}>Shipping</StyledLink>
      <Arrow />
      <StyledLink to={'/billing'}>Billing</StyledLink>
      <Arrow />
      <StyledLink to={'/payment'}>Payment</StyledLink>
    </Flex>
  </Nav>
);

export default NavigationBar;
