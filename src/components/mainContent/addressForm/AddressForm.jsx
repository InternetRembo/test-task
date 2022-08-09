import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Title from "../../reusableComponents/StyledTitle";
import Flex from "../../reusableComponents/Flex";

const AddressForm = () => {
  return (
    <div>
      <Form.Group controlId="formBasicAddress">
        <Title margin="0 0 5px 0" size="20px">
          Address
        </Title>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Street Address"
        />
      </Form.Group>

      <Form.Group controlId="formBasicAdditionalInformation">
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCity">
        <InputGroup className="mb-3">
          <Form.Control
            style={{ borderRight: "none" }}
            type="text"
            placeholder="City"
          />
          <InputGroup.Text>
            <i className="bi bi-geo" />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Flex>
        <Form.Select className="mb-3" aria-label="Country">
          <option>Country</option>
          <option value="1">Ukraine</option>
          <option value="2">Poland</option>
          <option value="3">USA</option>
        </Form.Select>

        <Form.Group controlId="formBasicZip">
          <Form.Control
            className="mb-3"
            style={{ width: "140px", marginLeft: "20px" }}
            type="text"
            placeholder="ZIP"
          />
        </Form.Group>
      </Flex>
    </div>
  );
};

export default AddressForm;
