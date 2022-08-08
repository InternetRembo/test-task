import React from 'react';
import {Form, InputGroup} from "react-bootstrap";
import Title from "../../reusableComponents/StyledTitle";
import {inputStyles} from "../formStyles/formStyles";
import Flex from "../../reusableComponents/Flex";
import targetIcon from "../../../assets/target_9.png"

const AddressForm = (props) => {
    return ( <div>
        <Form.Group controlId="formBasicAddress">
            <Title margin='0 0 5px 0' size="20px"> Address </Title>
            <Form.Control style={inputStyles} type='text' placeholder="Street Address"/>
        </Form.Group>

    <Form.Group controlId="formBasicAdditionalInformation">
        <Form.Control style={inputStyles} type="text"
                      placeholder="Apt, Suite, Bldg, Gate Code. (optional)"/>
    </Form.Group>

    <Form.Group controlId="formBasicCity">
        <InputGroup>
        <Form.Control style={{...inputStyles , margin:'20px 0'}}
                      type="text"
                      placeholder="City"/>
        </InputGroup>
    </Form.Group>

    <Flex>

        <Form.Select style={{...inputStyles, width: '180px', color: 'gray'}} aria-label="Country">
            <option>Country</option>
            <option value="1">Ukraine</option>
            <option value="2">Poland</option>
            <option value="3">USA</option>
        </Form.Select>

        <Form.Group controlId="formBasicZip">
            <Form.Control style={{...inputStyles, width: '140px' , marginLeft:'20px'}} type="text" placeholder="ZIP"/>
        </Form.Group>

    </Flex>
        </div>

)
}

export default AddressForm;