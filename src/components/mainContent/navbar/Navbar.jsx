import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const linkStyles = {
  color: "gray",
  textDecoration: "none",
  active: {
    color: "violet",
    textDecoration: "none",
  },
};

const Arrow = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  transform: rotate(50deg);
  margin-right: 15px;
`;

const isActiveLink = ({ isActive }) =>
  isActive ? { ...linkStyles.active } : { ...linkStyles };

const NavigationBar = () => {
  return (
    <Nav
      className="mb-3"
      style={{ display: "flex", alignItems: "center" }}
      defaultActiveKey="shipping"
    >
      <NavLink style={isActiveLink} to={"/"}>
        Shipping
      </NavLink>
      <Arrow />
      <NavLink style={isActiveLink} to={"/billing"}>
        Billing
      </NavLink>
      <Arrow />
      <NavLink style={isActiveLink} to={"/payment"}>
        Payment
      </NavLink>
    </Nav>
  );
};

export default NavigationBar;
