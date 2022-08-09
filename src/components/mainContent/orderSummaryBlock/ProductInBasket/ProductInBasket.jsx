import React from "react";
import styled from "styled-components";
import StyledTitle from "../../../reusableComponents/StyledTitle";

const Product = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 5px;

  img {
    border: 1px solid grey;
    width: 50px;
    height: 50px;
  }
`;
const ProductInBasket = () => {
  return (
    <Product>
      <img
        src={
          "https://www.pngmart.com/files/22/Short-Sleeves-T-Shirt-PNG-Transparent.png"
        }
        alt={"Something is wrong with picture"}
      />

      <div style={{ width: "64%" }}>
        <StyledTitle size="14px" color="gray">
          Some product name
        </StyledTitle>
        <StyledTitle size="12px" color="black">
          Some product summary
        </StyledTitle>
        <StyledTitle size="12px" color="black">
          Quantity: 1
        </StyledTitle>
      </div>

      <div>
        <StyledTitle size="12px" famaly="Arial" color="grey">
          $10
        </StyledTitle>
      </div>
    </Product>
  );
};

export default ProductInBasket;
