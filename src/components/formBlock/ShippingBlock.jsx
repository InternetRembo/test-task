import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Navbar, AddressForm, ErrorBlock } from '../index';
import { Title, Button, Flex, StyledFormBlock, StyledBox } from '../../styled';

import { shippingValidate } from './validate';

let initialValues = {
  name: '',
  phone: '',
  street: '',
  additionalInfo: '',
  city: '',
  zip: '',
  country: '',
};

const ShippingBlock = () => {
  let navigate = useNavigate();
  const refs = {
    nameRef: useRef(null),
    phoneRef: useRef(null),
    streetRef: useRef(null),
    cityRef: useRef(null),
    zipRef: useRef(null),
    countryRef: useRef(null),
  };

  const onSubmit = (values) => {
    let shippingData = {
      name: values.name,
      phone: values.phone,
      street: values.street,
      additionalInfo: values.additionalInfo,
      city: values.city,
      zip: values.zip,
      country: values.country,
    };

    initialValues = { ...shippingData };

    localStorage.setItem('shippingData', JSON.stringify(shippingData));
    navigate('/billing');
  };

  const formik = useFormik({
    initialValues,
    validate: shippingValidate,
    onSubmit: onSubmit,
  });
  return (
    <StyledFormBlock>
      <Navbar />
      <Title margin="10px 0 10px 0" size="26px" weight="200">
        Shipping Info
      </Title>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Title margin="0 0 5px 0" size="18px">
            Recipient
          </Title>

          {formik.errors.name && formik.touched.name && <ErrorBlock error={formik.errors.name} target={refs.nameRef} />}

          <Form.Control
            ref={refs.nameRef}
            id="name"
            name="name"
            className="mb-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Full name"
          />
        </Form.Group>

        <Form.Group>
          {formik.errors.phone && formik.touched.phone && (
            <ErrorBlock error={formik.errors.phone} target={refs.phoneRef} />
          )}

          <Flex>
            <StyledBox width="180px">
              <Form.Control
                ref={refs.phoneRef}
                className="mb-3"
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Daytime Phone"
              />
            </StyledBox>

            <Title margin="0 0 0 10px" color="grey" size="14px" style={{ width: '100px' }}>
              For delivery questions only
            </Title>
          </Flex>

          <AddressForm refs={refs} formik={formik} />
        </Form.Group>
        <Button type="submit"> Continue </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default ShippingBlock;
