import React, { FC } from 'react';

import Flex from '../styled/StyledFlex';

import { StyledBadge } from '../styled/StyledBadge';
import { StyledHeader } from '../styled/StyledHeader';
import { useAppSelector } from '../redux/hooks';

const Header: FC = () => {
  const productsList = useAppSelector((state) => state.orderReducer.productList);
  return (
    <StyledHeader>
      <Flex justify="space-between">
        <Flex aling="center">
          <i style={{ fontSize: '24px' }} className="bi bi-code-slash" />
          &nbsp;Front-end Developer Test Task
        </Flex>

        <div style={{ position: 'relative' }}>
          cart&nbsp;
          <i className="bi bi-cart3" />
          <StyledBadge top="-5px" right="-10px">
            {productsList.length}
          </StyledBadge>
        </div>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
