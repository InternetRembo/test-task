import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { StyledMainContent } from '../styled';
import { ShippingBlock, OrderSummaryBlock, BillingBlock, PaymentBlock, OrderInfo } from './index';

const MainContent = () => (
  <StyledMainContent data-testid="Main">
    <Routes>
      <Route path="/" element={<ShippingBlock />} />
      <Route path="/billing" element={<BillingBlock />} />
      <Route path="/payment" element={<PaymentBlock />} />
      <Route path="/order" element={<OrderInfo />} />
    </Routes>

    <OrderSummaryBlock />
  </StyledMainContent>
);

export default MainContent;
