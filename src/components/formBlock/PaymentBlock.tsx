import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { StyledBadge, Title, Button, Flex, StyledFormBlock, StyledBox } from '../../styled';
import { Navbar, ErrorBlock } from '../index';

import { paymentValidate } from '../../helpers/validate';
import { setUsersData } from '../../api';
import { BillingValues, ShippingValues } from '../../types/formTypes';

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

  const onSubmit = () => {
    let shippingData = localStorage.getItem('shippingData');
    let ParseShippingData: ShippingValues = JSON.parse(shippingData!);
    let billingData = localStorage.getItem('billingData');
    let ParseBillingData: BillingValues = JSON.parse(billingData!);
    let paymentData = { ...formik.values };

    if (ParseShippingData && ParseBillingData) {
      setUsersData(ParseShippingData, ParseBillingData, paymentData).then();
      navigate('/order');
    } else {
      alert('Oops, it looks like you didnt specify all the required information');
      navigate('/');
    }
  };
  const formik = useFormik({
    initialValues,
    validate: paymentValidate,
    onSubmit: onSubmit,
  });

  return (
    <StyledFormBlock data-testid="Payment">
      <Navbar />
      <Title margin="10px 0 10px 0" size="26px">
        Payment
      </Title>
      <Title famaly="none" color="grey" margin="0px 0 15px 0" size="16px">
        <Title position="relative" color="black" size="22px">
          <i className="bi bi-lock">
            <StyledBadge bgColor="#00e600" width="12px" height="12px" top="13px" right="-2px">
              <i className="bi bi-check" />
            </StyledBadge>
          </i>
        </Title>
        &nbsp;This is a secure 128-bit SSL encrypted payment
      </Title>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Title margin="0 0 5px 0" size="18px">
            Cardholder Name
          </Title>
          {formik.errors.cardholderName && formik.touched.cardholderName && (
            <ErrorBlock error={formik.errors.cardholderName} target={refs.cardholderRef} />
          )}

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
          {formik.errors.cardNumber && formik.touched.cardNumber && (
            <ErrorBlock error={formik.errors.cardNumber} target={refs.cardNumberRef} />
          )}

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
        <Flex width="240px" justify="space-between">
          <Form.Group>
            <Title margin="0 0 5px 0" size="18px">
              Expire Date
            </Title>
            {formik.errors.expireDate && formik.touched.expireDate && (
              <ErrorBlock error={formik.errors.expireDate} target={refs.expireDateRef} />
            )}

            <StyledBox width="90px">
              <Form.Control
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
            </StyledBox>
          </Form.Group>

          <Form.Group>
            <Title margin="0 0 5px 0" size="18px">
              Security Code
            </Title>

            {formik.errors.securityCode && formik.touched.securityCode && (
              <ErrorBlock error={formik.errors.securityCode} target={refs.securityCodeRef} />
            )}
            <StyledBox width="90px">
              <Form.Control
                data-testid="code"
                ref={refs.securityCodeRef}
                id="securityCode"
                name="securityCode"
                className="mb-3"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.securityCode}
              />
            </StyledBox>
          </Form.Group>
        </Flex>

        <Button type="submit"> Pay Securely </Button>
      </Form>
    </StyledFormBlock>
  );
};

export default PaymentBlock;
