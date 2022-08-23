import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { OrderInfo } from '../../components';

import { store } from '../../redux/redux-store';

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

it('should mount order screen ', () => {
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
