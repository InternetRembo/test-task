import React from 'react';
import { Form } from 'react-bootstrap';

import Navbar from './Navbar';
import Title from '../../styled/StyledTitle';
import Button from '../../styled/StyledButton';
import StyledTitle from '../../styled/StyledTitle';
import Flex from '../../styled/StyledFlex';
import AddressForm from './AddressForm';
import { StyledFormBlock } from '../../styled/formBlock/StyledFormBlock';

const ShippingBlock = () => (
  <StyledFormBlock>
    <Navbar />
    <Title margin="10px 0 10px 0" size="26px" weight="200">
      Shipping Info
    </Title>

    <Form>
      <Form.Group controlId="formBasicName">
        <Title margin="0 0 5px 0" size="18px">
          Recipient
        </Title>
        <Form.Control className="mb-3" type="text" placeholder="Full name" />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Flex>
          <Form.Control
            className="mb-3"
            style={{ display: 'inline-block', width: '180px' }}
            type="text"
            placeholder="Daytime Phone"
          />

          <StyledTitle margin="0 0 0 10px" color="grey" size="14px" style={{ width: '100px' }}>
            For delivery questions only
          </StyledTitle>
        </Flex>

        <AddressForm />
      </Form.Group>

      <Button> Continue </Button>
    </Form>
  </StyledFormBlock>
);

export default ShippingBlock;
