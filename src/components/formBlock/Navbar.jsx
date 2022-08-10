import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { Arrow } from '../../styled/Arrow';

const linkStyles = {
  color: 'gray',
  textDecoration: 'none',
  active: {
    color: 'violet',
    textDecoration: 'none',
  },
};

const isActiveLink = ({ isActive }) => (isActive ? { ...linkStyles.active } : { ...linkStyles });

const NavigationBar = () => (
  <Nav className="mb-3" style={{ display: 'flex', alignItems: 'center' }} defaultActiveKey="shipping">
    <NavLink style={isActiveLink} to={'/'}>
      Shipping
    </NavLink>
    <Arrow />
    <NavLink style={isActiveLink} to={'/billing'}>
      Billing
    </NavLink>
    <Arrow />
    <NavLink style={isActiveLink} to={'/payment'}>
      Payment
    </NavLink>
  </Nav>
);

export default NavigationBar;
