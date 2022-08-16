import React from 'react';
import { Nav } from 'react-bootstrap';

import { Arrow, StyledLink } from '../../styled';

const NavigationBar = () => (
  <Nav className="mb-3" style={{ display: 'flex', alignItems: 'center' }} defaultActiveKey="shipping">
    <StyledLink to={'/'}>Shipping</StyledLink>
    <Arrow />
    <StyledLink to={'/billing'}>Billing</StyledLink>
    <Arrow />
    <StyledLink to={'/payment'}>Payment</StyledLink>
  </Nav>
);

export default NavigationBar;
