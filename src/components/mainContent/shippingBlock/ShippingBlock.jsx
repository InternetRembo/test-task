import React from "react";
import Navbar from "../navbar/Navbar";
import Title from "../../reusableComponents/StyledTitle";
import { Form } from "react-bootstrap";
import Button from "../../reusableComponents/StyledButton";
import StyledTitle from "../../reusableComponents/StyledTitle";
import Flex from "../../reusableComponents/Flex";
import { StyledFormBlock } from "../MainContent";
import AddressForm from "../addressForm/AddressForm";

const ShippingBlock = () => {
  return (
    <StyledFormBlock>
      <Navbar />
      <Title margin="10px 0 10px 0" size="26px" weight="200">
        {" "}
        Shipping Info{" "}
      </Title>

      <Form>
        <Form.Group controlId="formBasicName">
          <Title margin="0 0 5px 0" size="20px">
            {" "}
            Recipient{" "}
          </Title>
          <Form.Control className="mb-3" type="text" placeholder="Full name" />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Flex>
            <Form.Control
              className="mb-3"
              style={{ display: "inline-block", width: "180px" }}
              type="text"
              placeholder="Daytime Phone"
            />

            <StyledTitle
              margin="0 0 0 10px"
              color="grey"
              size="14px"
              style={{ width: "100px" }}
            >
              For delivery questions only
            </StyledTitle>
          </Flex>

          <AddressForm />
        </Form.Group>

        <Button> Continue </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default ShippingBlock;
