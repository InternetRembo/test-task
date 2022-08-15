import React from 'react';
import { Overlay } from 'react-bootstrap';

import { StyledErrorBlock } from '../../styled';

const ErrorBlock = ({ target, error }) => (
  <Overlay target={target.current} show={error} placement="top-start">
    {({ placement, ...props }) => <StyledErrorBlock {...props}>{error}</StyledErrorBlock>}
  </Overlay>
);

export default ErrorBlock;
