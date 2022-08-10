import React from 'react';
import { Form } from 'react-bootstrap';

import { StyledBadge } from '../../styled/StyledBadge';

import Navbar from './Navbar';
import Title from '../../styled/StyledTitle';
import Button from '../../styled/StyledButton';
import Flex from '../../styled/StyledFlex';
import { StyledFormBlock } from '../../styled/formBlock/StyledFormBlock';

const PaymentBlock = () => (
  <StyledFormBlock>
    <Navbar />
    <Title margin="10px 0 10px 0" size="26px">
      Payment
    </Title>

    <Title famaly="none" color="grey" margin="0px 0 15px 0" size="16px">
      <i style={{ position: 'relative', color: 'black', fontSize: '22px' }} className="bi bi-lock">
        <StyledBadge bgColor="#00e600" width="12px" height="12px" top="17px" right="-2px">
          <i className="bi bi-check" />
        </StyledBadge>
      </i>
      &nbsp;This is a secure 128-bit SSL encrypted payment
    </Title>

    <Form>
      <Form.Group controlId="formBasicCardholderName">
        <Title margin="0 0 5px 0" size="18px">
          Cardholder Name
        </Title>
        <Form.Control className="mb-3" type="text" placeholder="Name as it appears on your card" />
      </Form.Group>
      <Form.Group controlId="formBasicCardNumber">
        <Title margin="0 0 5px 0" size="18px">
          Card Number
        </Title>
        <Form.Control className="mb-3" type="text" placeholder="XXXX XXXX XXXX XXXX XXXX" />
      </Form.Group>
      <Flex style={{ width: '240px' }} justify="space-between">
        <Form.Group controlId="formBasicExpireDate">
          <Title margin="0 0 5px 0" size="18px">
            Expire Date
          </Title>
          <Form.Control style={{ width: '90px' }} className="mb-3" type="text" placeholder="MM/YY" />
        </Form.Group>

        <Form.Group controlId="formBasicSecurityCode">
          <Title margin="0 0 5px 0" size="18px">
            Security Code
          </Title>
          <Form.Control style={{ width: '90px' }} className="mb-3" type="password" />
        </Form.Group>
      </Flex>

      <Button> Pay Securely </Button>
    </Form>
  </StyledFormBlock>
);

export default PaymentBlock;
