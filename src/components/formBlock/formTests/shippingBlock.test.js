import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { ShippingBlock } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ShippingBlock />
      </MemoryRouter>
    </Provider>,
  );
});

test('is shipping form has mount', () => {
  const Shipping = screen.getByText(/Shipping Info/i);
  expect(Shipping).toBeInTheDocument();
});

test('is address form has mount', () => {
  const Address = screen.getByText(/Address/i);
  expect(Address).toBeInTheDocument();
});
