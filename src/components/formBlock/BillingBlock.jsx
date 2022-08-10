import React from 'react';
import { Form } from 'react-bootstrap';

import Navbar from './Navbar';
import Title from '../../styled/StyledTitle';
import AddressForm from './AddressForm';
import Button from '../../styled/StyledButton';
import Flex from '../../styled/StyledFlex';
import { StyledFormBlock } from '../../styled/formBlock/StyledFormBlock';

const BillingBlock = () => (
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
        <Form.Control className="mb-3" type="text" placeholder="Email Address" />
      </Form.Group>

      <AddressForm />
      <Button> Continue </Button>
    </Form>
  </StyledFormBlock>
);

export default BillingBlock;
