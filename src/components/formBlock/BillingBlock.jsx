import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Navbar, AddressForm, ErrorBlock } from '../index';
import { Title, Flex, StyledFormBlock, Button } from '../../styled';

import { billingValidate } from './validate';

let initialValues = {
  name: '',
  email: '',
  street: '',
  additionalInfo: '',
  city: '',
  zip: '',
  country: '',
};

const BillingBlock = () => {
  const navigate = useNavigate();
  const refs = {
    nameRef: useRef(null),
    emailRef: useRef(null),
    streetRef: useRef(null),
    cityRef: useRef(null),
    zipRef: useRef(null),
    countryRef: useRef(null),
  };

  const onSubmit = (values) => {
    let billingData = {
      name: values.name,
      email: formik.values.email,
      street: formik.values.street,
      additionalInfo: formik.values.additionalInfo,
      city: formik.values.city,
      zip: formik.values.zip,
      country: formik.values.country,
    };

    localStorage.setItem('billingData', JSON.stringify(billingData));
    navigate('/payment');
  };

  const formik = useFormik({
    initialValues,
    validate: billingValidate,
    onSubmit: onSubmit,
  });

  const setSameAsShipping = () => {
    let shippingData = localStorage.getItem('shippingData');
    shippingData = JSON.parse(shippingData);

    formik.setFieldValue('name', shippingData.name);
    formik.setFieldValue('street', shippingData.street);
    formik.setFieldValue('additionalInfo', shippingData.additionalInfo);
    formik.setFieldValue('city', shippingData.city);
    formik.setFieldValue('country', shippingData.country);
    formik.setFieldValue('zip', shippingData.zip);
  };

  return (
    <StyledFormBlock>
      <Navbar />
      <Flex justify="space-between" aling="center">
        <Title margin="10px 0 10px 0" size="26px" weight="200">
          Billing Information
        </Title>

        <Title
          onClick={() => {
            setSameAsShipping();
          }}
          decoration="underline"
          size="12px"
        >
          Same as shipping
        </Title>
      </Flex>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Title margin="0 0 5px 0" size="18px">
            Billing Contact
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
          {formik.errors.email && formik.touched.email && (
            <ErrorBlock error={formik.errors.email} target={refs.emailRef} />
          )}

          <Form.Control
            ref={refs.emailRef}
            id="email"
            name="email"
            className="mb-3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>

        <AddressForm refs={refs} formik={formik} />
        <Button type="submit"> Continue </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default BillingBlock;
