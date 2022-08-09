import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "normal"};
  font-style: ${(props) => props.style || "normal"};
  font-family: ${(props) => props.famaly || "Alef"};
  color: ${(props) => props.color || " #7a11d2"};
  margin: ${(props) => props.margin || "0"};
  text-decoration: ${(props) => props.decoration || "none"};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
