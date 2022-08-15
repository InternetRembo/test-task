import styled from 'styled-components';

export const StyledMainContent = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 580px;
  width: 80vw;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  box-shadow: 1px 1px 1px #bebdbd;
  @media (max-width: 768px) {
    width: 90vw;
    height: 800px;
  }
  @media (max-width: 576px) {
    flex-direction: column;

    min-width: 100%;
    height: 100%;
  }
`;
