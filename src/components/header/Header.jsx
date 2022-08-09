import React from "react";
import styled from "styled-components";
import Flex from "../reusableComponents/Flex";

const StyledHeader = styled.div`
  margin: 0 auto 40px;
  padding: 10px 150px;
  border-bottom: 1px solid violet;
  background-color: white;
  width: 1000px;
  height: 50px;
  box-shadow: 1px 1px 1px #bebdbd;
  font-size: 18px;
  color: #ec26e9;
`;

const StyledBadge = styled.span`
  background-color: #f83d6b;
  display: flex;
  align-items: center;
  font-family: Arial;
  font-size: 10px;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: -10px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Flex justify="space-between">
        <Flex aling="center">
          <i style={{ fontSize: "24px" }} className="bi bi-code-slash" />
          &nbsp;Front-end Developer Test Task
        </Flex>

        <div style={{ position: "relative" }}>
          cart&nbsp;
          <i className="bi bi-cart3" />
          <StyledBadge>3</StyledBadge>
        </div>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
