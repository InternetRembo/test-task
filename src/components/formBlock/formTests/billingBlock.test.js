import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { BillingBlock } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BillingBlock />
      </MemoryRouter>
    </Provider>,
  );
});

test('is billing form has mount', () => {
  const Shipping = screen.getByText(/Billing Information/i);
  expect(Shipping).toBeInTheDocument();
});

test('is address form has mount', () => {
  const Address = screen.getByText(/Address/i);
  expect(Address).toBeInTheDocument();
});
