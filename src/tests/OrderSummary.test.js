import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';

import { OrderSummaryBlock } from '../components';

import { store } from '../redux/redux-store';

jest.mock('axios');

let response;

beforeEach(async () => {
  response = {
    data: [
      {
        name: 'Cool t-shirt',
        price: 14,
        summary: 'Really cool',
        img: 'https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-PNG-Pic.png',
        quantity: 1,
      },
    ],
  };

  await axios.get.mockReturnValue(response);

  render(
    <Provider store={store}>
      <OrderSummaryBlock />
    </Provider>,
  );
});

it('should render order info correctly', () => {
  expect(screen.getByTestId('info-block')).toBeInTheDocument();
});

it('product list should appears after receiving the data ', async () => {
  const testProduct = await screen.findAllByTestId(/ProductInBasket/i);
  expect(testProduct.length).toEqual(1);
});
