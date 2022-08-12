import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { StyledMainContent } from '../styled/StyledMainContent';
import { ShippingBlock, OrderSummaryBlock, BillingBlock, PaymentBlock } from './index';
import OrderInfo from './formBlock/OrderInfo';

const MainContent = () => (
  <StyledMainContent>
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
