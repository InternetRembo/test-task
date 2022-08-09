import React from "react";
import { StyledFormBlock } from "../MainContent";
import Navbar from "../navbar/Navbar";
import Title from "../../reusableComponents/StyledTitle";
import { Form } from "react-bootstrap";
import AddressForm from "../addressForm/AddressForm";
import Button from "../../reusableComponents/StyledButton";
import Flex from "../../reusableComponents/Flex";

const BillingBlock = () => {
  return (
    <StyledFormBlock>
      <Navbar />
      <Flex justify="space-between" aling="center">
        <Title margin="10px 0 10px 0" size="26px" weight="200">
          Billing Information
        </Title>

        <Title decoration="underline" size="12px">
          Same as shipping
        </Title>
      </Flex>

      <Form>
        <Form.Group controlId="formBasicName">
          <Title margin="0 0 5px 0" size="18px">
            Billing Contact
          </Title>
          <Form.Control className="mb-3" type="text" placeholder="Full name" />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Email Address"
          />
        </Form.Group>

        <AddressForm />
        <Button> Continue </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default BillingBlock;
