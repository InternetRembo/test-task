import React from 'react';
import styled from "styled-components";
import Flex from "../assets/Flex";

const StyledHeader = styled.div`

  font-size: 1em;
  margin: 0 auto;
  padding: 10px 150px;
  border-bottom: 1px solid violet;
  background-color: white;
  width: 1000px;
  height: 50px;
  box-shadow: 1px 1px 1px #bebdbd;
  margin-bottom: 40px;
  font-size: 18px;
  color: #ec26e9;
`;

const Header = (props) => {

    return <StyledHeader>
        <Flex justify="space-between" >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor"
                     className="bi bi-code-slash"
                     viewBox="0 0 16 16">
                    <path
                        d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
                Front-end Developer Test Task
            </div>
            <div>
                cart
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-cart3" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>

        </Flex>

    </StyledHeader>
}


export default Header;