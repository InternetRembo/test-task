import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin: 0 auto 40px;
  padding: 10px 150px;
  border-bottom: 1px solid violet;
  background-color: white;
  width: 90vw;
  max-width: 1000px;
  height: 50px;
  box-shadow: 1px 1px 1px #bebdbd;
  font-size: 18px;
  color: #ec26e9;
  @media (max-width: 768px) {
    padding: 10px 50px;
    font-size: 14px;
  }
  @media (max-width: 576px) {
    padding: 10px 20px;
  }
`;
