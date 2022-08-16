import React, { RefObject } from 'react';
import { Overlay } from 'react-bootstrap';

import { StyledErrorBlock } from '../../styled';

type ErorProps = {
  target: RefObject<HTMLInputElement> | RefObject<HTMLSelectElement>;
  error: string;
};

const ErrorBlock = ({ target, error }: ErorProps) => {
  console.log('target', target);
  console.log('error', error);
  return (
    <Overlay target={target.current} show={!!error} placement="top-start">
      {({ placement, ...props }) => <StyledErrorBlock {...props}>{error}</StyledErrorBlock>}
    </Overlay>
  );
};

export default ErrorBlock;
