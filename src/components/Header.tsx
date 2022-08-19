import React, { FC } from 'react';
import { useAppSelector } from '../redux/hooks';

import Flex from '../styled/StyledFlex';
import { StyledBadge, StyledHeader, Title, StyledBox } from '../styled';

const Header: FC = () => {
  const productsList = useAppSelector((state) => state.orderReducer.productList);
  return (
    <StyledHeader>
      <Flex justify="space-between">
        <Flex aling="center">
          <Title color="violet" size="24px">
            <i className="bi bi-code-slash" />
          </Title>
          &nbsp;Front-end Developer Test Task
        </Flex>

        <StyledBox width="56px" display="inline" position="relative">
          cart&nbsp;
          <i className="bi bi-cart3" />
          <StyledBadge data-testid="Counter" top="-5px" right="-10px">
            {productsList.length}
          </StyledBadge>
        </StyledBox>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
