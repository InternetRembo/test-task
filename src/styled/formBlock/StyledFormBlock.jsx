import styled from 'styled-components';

export const StyledFormBlock = styled.div`
  background-color: white;
  width: 60%;
  height: 100%;
  padding: 15px 30px;
  font-family: Alef;

  @media (max-width: 576px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    order: 2;
    margin-top: 20px;
  }
`;
