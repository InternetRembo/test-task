import React from 'react';

import Title from '../../styled/StyledTitle';
import Flex from '../../styled/StyledFlex';

import { Form, InputGroup } from 'react-bootstrap';

const AddressForm = () => (
  <div>
    <Form.Group controlId="formBasicAddress">
      <Title margin="0 0 5px 0" size="18px">
        Address
      </Title>
      <Form.Control className="mb-3" type="text" placeholder="Street Address" />
    </Form.Group>

    <Form.Group controlId="formBasicAdditionalInformation">
      <Form.Control className="mb-3" type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
    </Form.Group>

    <Form.Group controlId="formBasicCity">
      <InputGroup className="mb-3">
        <Form.Control style={{ borderRight: 'none' }} type="text" placeholder="City" />
        <InputGroup.Text>
          <i className="bi bi-geo" />
        </InputGroup.Text>
      </InputGroup>
    </Form.Group>

    <Flex>
      <Form.Select style={{ minWidth: '50%' }} className="mb-3" aria-label="Country">
        <option>Country</option>
        <option value="1">Ukraine</option>
        <option value="2">Poland</option>
        <option value="3">USA</option>
      </Form.Select>

      <Form.Group controlId="formBasicZip">
        <Form.Control
          className="mb-3"
          style={{ width: '140px', minWidth: '50%', marginLeft: '20px' }}
          type="text"
          placeholder="ZIP"
        />
      </Form.Group>
    </Flex>
  </div>
);

export default AddressForm;
