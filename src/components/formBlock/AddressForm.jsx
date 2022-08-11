import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import Title from '../../styled/StyledTitle';
import Flex from '../../styled/StyledFlex';
import ErrorBlock from "./ErrorBlock";


const AddressForm = ({formik , refs}) => (
  <div>
    <Form.Group controlId="formBasicAddress">
      <Title margin="0 0 5px 0" size="18px">
        Address
      </Title>

        {formik.errors.street  && formik.touched.street? <ErrorBlock error={formik.errors.street} target={refs.streetRef}/> : null}

      <Form.Control
                    ref={refs.streetRef}
                    className="mb-3"
                    type="text"
                    id='street'
                    name='street'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.street}
                    placeholder="Street Address" />
    </Form.Group>

    <Form.Group controlId="formBasicAdditionalInformation">
      <Form.Control className="mb-3"
                    type="text"
                    id='additionalInfo'
                    name='additionalInfo'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.additionalInfo}
                    placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
    </Form.Group>

    <Form.Group controlId="formBasicCity">
      <InputGroup className="mb-3">

          {formik.errors.city  && formik.touched.city?
              <ErrorBlock error={formik.errors.city} target={refs.cityRef}/> : null}

        <Form.Control
            ref={refs.cityRef}
                      style={{ borderRight: 'none' }}
                      type="text"
                      id='city'
                      name='city'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                      placeholder="City" />
        <InputGroup.Text>
          <i className="bi bi-geo" />
        </InputGroup.Text>
      </InputGroup>
    </Form.Group>

      {formik.errors.country  && formik.touched.country ?
          <ErrorBlock error={formik.errors.country} target={refs.countryRef}/> : null}

    <Flex>
      <Form.Select style={{ minWidth: '50%' }}
                   ref={refs.countryRef}
                   className="mb-3"
                   id='country'
                   name='country'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.country}
                   aria-label="Country">
        <option>Country</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="USA">USA</option>
      </Form.Select>

      <Form.Group controlId="formBasicZip">

          {formik.errors.zip  && formik.touched.zip ?
              <ErrorBlock error={formik.errors.zip} target={refs.zipRef}/> : null}

        <Form.Control
            ref={refs.zipRef}
          className="mb-3"
          style={{ width: '140px', minWidth: '50%', marginLeft: '20px' }}
          type="text"
          id='zip'
          name='zip'
          onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          value={formik.values.zip}
          placeholder="ZIP"
        />
      </Form.Group>
    </Flex>
  </div>
);

export default AddressForm;
