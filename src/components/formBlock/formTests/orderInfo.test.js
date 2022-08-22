import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { OrderInfo } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

test('is order screen has mount', () => {
  localStorageMock.setItem('billingData', JSON.stringify({ email: 'email' }));
  render(
    <Provider store={store}>
      <MemoryRouter>
        <OrderInfo />
      </MemoryRouter>
    </Provider>,
  );
  const Order = screen.getByText(/Thank you for your order!/i);
  expect(Order).toBeInTheDocument();
});
