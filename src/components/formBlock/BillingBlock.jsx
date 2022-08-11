import React, {useRef} from 'react';
import {Form} from 'react-bootstrap';
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";


import Navbar from './Navbar';
import Title from '../../styled/StyledTitle';
import AddressForm from './AddressForm';
import Button from '../../styled/StyledButton';
import Flex from '../../styled/StyledFlex';
import {StyledFormBlock} from '../../styled/formBlock/StyledFormBlock';
import {billingValidate} from "./validate";
import ErrorBlock from "./ErrorBlock";


const initialValues = {
    name: '',
    email: '',
    street: '',
    additionalInfo: '',
    city: '',
    zip: '',
    country: '',
}

const BillingBlock = () => {
    const navigate = useNavigate()
    const refs = {
        nameRef: useRef(null),
        emailRef: useRef(null),
        streetRef: useRef(null),
        cityRef: useRef(null),
        zipRef: useRef(null),
        countryRef: useRef(null),
    }

    const onSubmit = values => navigate('/payment')

    const formik = useFormik({
        initialValues,
        validate: billingValidate,
        onSubmit: onSubmit,
    })
    return (
        <StyledFormBlock>
            <Navbar/>
            <Flex justify="space-between" aling="center">
                <Title margin="10px 0 10px 0" size="26px" weight="200">
                    Billing Information
                </Title>

                <Title decoration="underline" size="12px">
                    Same as shipping
                </Title>
            </Flex>

            <Form onSubmit={formik.handleSubmit} >

                <Form.Group controlId="formBasicName">
                    <Title margin="0 0 5px 0" size="18px">
                        Billing Contact
                    </Title>

                    {formik.errors.name && formik.touched.name ?
                        <ErrorBlock error={formik.errors.name} target={refs.nameRef}/> : null}

                    <Form.Control
                        ref={refs.nameRef}
                        id='name'
                        name='name'
                        className="mb-3"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Full name"/>
                </Form.Group>
                <Form.Group controlId="formBasicName">

                    {formik.errors.email && formik.touched.email ?
                        <ErrorBlock error={formik.errors.email} target={refs.emailRef}/> : null}

                    <Form.Control
                        ref={refs.emailRef}
                        id='email'
                        name='email'
                        className="mb-3"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        type="email"
                        placeholder="Email Address"/>
                </Form.Group>

                <AddressForm refs={refs} formik={formik}/>
                <Button   type='submit'  > Continue </Button>
            </Form>
        </StyledFormBlock>
    )
}


export default BillingBlock;
