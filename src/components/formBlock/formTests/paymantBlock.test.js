import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { PaymentBlock } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PaymentBlock />
      </MemoryRouter>
    </Provider>,
  );
});

test('is payment form has mount', () => {
  const Payment = screen.getByTestId(/Payment/i);
  expect(Payment).toBeInTheDocument();
});
