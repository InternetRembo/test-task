import React from 'react';
import {StyledFormBlock} from "../MainContent";
import Navbar from "../navbar/Navbar";
import Title from "../../reusableComponents/StyledTitle";
import {Form} from "react-bootstrap";
import {inputStyles} from "../formStyles/formStyles";
import AddressForm from "../addressForm/AddressForm";
import Button from "../../reusableComponents/StyledButton";

const BillingBlock = (props) =>{
    return <StyledFormBlock>
        <Navbar/>
        <Title margin="10px 0 10px 0" size="26px" weight='200'> Billing Information </Title>

        <Form>
            <Form.Group controlId="formBasicName">
                <Title margin='0 0 5px 0' size="20px"> Billing Contact </Title>
                <Form.Control style={inputStyles} type='text' placeholder="Full name"/>
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Control style={inputStyles} type='text' placeholder="Email Address"/>
            </Form.Group>

             <AddressForm/>
            <Button> Continue </Button>
        </Form>
    </StyledFormBlock>
}

export default BillingBlock;