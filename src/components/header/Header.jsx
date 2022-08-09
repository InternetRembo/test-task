import React from "react";
import styled from "styled-components";
import Flex from "../reusableComponents/Flex";
import { StyledBadge } from "../reusableComponents/StyledBadge";

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
          <StyledBadge top="-5px" right="-10px">
            3
          </StyledBadge>
        </div>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
