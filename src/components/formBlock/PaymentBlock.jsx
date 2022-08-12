import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { StyledBadge } from '../../styled/StyledBadge';
import Navbar from './Navbar';
import Title from '../../styled/StyledTitle';
import Button from '../../styled/StyledButton';
import Flex from '../../styled/StyledFlex';
import { StyledFormBlock } from '../../styled/formBlock/StyledFormBlock';
import { paymentValidate } from './validate';
import ErrorBlock from './ErrorBlock';
import axios from 'axios';

const initialValues = {
  cardholderName: '',
  cardNumber: '',
  expireDate: '',
  securityCode: '',
};

const PaymentBlock = () => {
  const refs = {
    cardholderRef: useRef(null),
    cardNumberRef: useRef(null),
    expireDateRef: useRef(null),
    securityCodeRef: useRef(null),
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {
    let shippingData = localStorage.getItem('shippingData');
    shippingData = JSON.parse(shippingData);
    let billingData = localStorage.getItem('billingData');
    billingData = JSON.parse(billingData);
    let paymentData = { ...formik.values };

    axios.post('https://demo6921937.mockable.io/', {
      shippingData: shippingData,
      billingData: billingData,
      paymentData: paymentData,
    });
    navigate('/order');
  };
  const formik = useFormik({
    initialValues,
    validate: paymentValidate,
    onSubmit: onSubmit,
  });
  return (
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

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Title margin="0 0 5px 0" size="18px">
            Cardholder Name
          </Title>
          {formik.errors.cardholderName && formik.touched.cardholderName ? (
            <ErrorBlock error={formik.errors.cardholderName} target={refs.cardholderRef} />
          ) : null}

          <Form.Control
            ref={refs.cardholderRef}
            id="cardholderName"
            name="cardholderName"
            className="mb-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardholderName}
            placeholder="Name as it appears on your card"
          />
        </Form.Group>
        <Form.Group>
          <Title margin="0 0 5px 0" size="18px">
            Card Number
          </Title>
          {formik.errors.cardNumber && formik.touched.cardNumber ? (
            <ErrorBlock error={formik.errors.cardNumber} target={refs.cardNumberRef} />
          ) : null}

          <Form.Control
            ref={refs.cardNumberRef}
            id="cardNumber"
            name="cardNumber"
            className="mb-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            placeholder="XXXX XXXX XXXX XXXX XXXX"
          />
        </Form.Group>
        <Flex style={{ width: '240px' }} justify="space-between">
          <Form.Group>
            <Title margin="0 0 5px 0" size="18px">
              Expire Date
            </Title>
            {formik.errors.expireDate && formik.touched.expireDate ? (
              <ErrorBlock error={formik.errors.expireDate} target={refs.expireDateRef} />
            ) : null}

            <Form.Control
              style={{ width: '90px' }}
              ref={refs.expireDateRef}
              id="expireDate"
              name="expireDate"
              className="mb-3"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expireDate}
              placeholder="MM/YY"
            />
          </Form.Group>

          <Form.Group>
            <Title margin="0 0 5px 0" size="18px">
              Security Code
            </Title>

            {formik.errors.securityCode && formik.touched.securityCode ? (
              <ErrorBlock error={formik.errors.securityCode} target={refs.securityCodeRef} />
            ) : null}

            <Form.Control
              style={{ width: '90px' }}
              ref={refs.securityCodeRef}
              id="securityCode"
              name="securityCode"
              className="mb-3"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.securityCode}
            />
          </Form.Group>
        </Flex>

        <Button type="submit"> Pay Securely </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default PaymentBlock;
