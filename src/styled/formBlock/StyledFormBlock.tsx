import styled from 'styled-components';
import { colors } from '../colors';

type StyledFormProps = {
  padding?: string;
};

export const StyledFormBlock = styled.div<StyledFormProps>`
  background-color: ${colors.backgroundMain};
  width: 60%;
  height: 100%;
  padding: ${(props) => props.padding || '15px 30px'};
  font-family: Alef;

  @media (max-width: 576px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    order: 2;
    margin-top: 20px;
  }
`;
