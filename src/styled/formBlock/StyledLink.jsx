import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../colors';

export const StyledLink = styled(NavLink)`
  color: ${colors.secondary};
  text-decoration: none;
  &.active {
    color: ${colors.main};
    text-decoration: none;
  }
`;
