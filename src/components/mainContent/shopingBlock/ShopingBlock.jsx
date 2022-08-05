import React from 'react';
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import Title from "../../assets/StyledTitle";
import {Form} from "react-bootstrap";
import {inputStyles} from "../formStyles/formStyles";
import Button from "../../assets/StyledButton";


const StyledShopingBlock = styled.div`
  background-color: white;
  width: 60%;
  height: 100%;
  padding: 30px;
  font-family: Alef;
`


const ShopingBlock = (props) => {
    return (
        <StyledShopingBlock>
            <Navbar/>
            <Title margin = "10px 0 10px 0" size="26px" weight='200'> Shipping Info </Title>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Title size="20px"> Recipient </Title>
                    <Form.Control style={inputStyles} type='text' placeholder="Full name"/>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Control style={{...inputStyles , width:'180px'} } type="text" placeholder="Daytime Phone"/>
                    <Form.Text className="text-muted">
                        <div>For delivery questions only</div>
                    </Form.Text>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formBasicAddres">
                    <Title size="20px"> Address </Title>
                    <Form.Control style={inputStyles} type='text' placeholder="Street Address"/>
                </Form.Group>

                <Form.Group controlId="formBasicAdditionalInformation">
                    <Form.Control style={inputStyles} type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)"/>
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                    <Form.Control style={inputStyles} type="text" placeholder="City"/>
                </Form.Group>

            </Form>
            <Button> Continue </Button>
        </StyledShopingBlock>
    )
}

export default ShopingBlock;