import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: grey;
  text-decoration: none;
  &.active {
    color: violet;
    text-decoration: none;
  }
`;
