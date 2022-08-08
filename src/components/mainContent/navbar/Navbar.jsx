import React from 'react';
import {Nav} from "react-bootstrap";
import {navbarStyles} from "./navbarStyles";
import styled from "styled-components";

const Arrow = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  transform: rotate(50deg);
  margin-right: 15px;
`
const NavigationBar = () => {


    return   <Nav style={{display:'flex' }} defaultActiveKey="shipping">
        <Nav.Item>
            <Nav.Link eventKey={'shipping'}
                      style={navbarStyles.navLink} href="/shipping">Shipping</Nav.Link>
        </Nav.Item>
        <Arrow/>
        <Nav.Item>
            <Nav.Link eventKey={'billing'} style={navbarStyles.navLink} href="/billing">Billing</Nav.Link>
        </Nav.Item>
        <Arrow/>
        <Nav.Item>
            <Nav.Link eventKey={'payment'} style={navbarStyles.navLink} href="/payment">Payment</Nav.Link>
        </Nav.Item>
    </Nav>
}

export default NavigationBar;