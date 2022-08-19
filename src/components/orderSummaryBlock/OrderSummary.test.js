import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderSummaryBlock } from '../index';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from '../../redux/redux-store';
import { OrderInfoBlock } from '../../styled';

jest.mock('axios');

it('is order info render correctly', () => {
  render(
    <Provider store={store}>
      <OrderSummaryBlock />
    </Provider>,
  );
  expect(screen.getByTestId('OrderInfoBlock')).toBeInTheDocument();
});

describe('async mounting product list', () => {
  let response;

  beforeEach(() => {
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

    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <OrderSummaryBlock />
      </Provider>,
    );
  });

  it('is product list appears after receiving the data ', async () => {
    const testProduct = await screen.findAllByTestId(/ProductInBasket/i);
    expect(testProduct.length).toEqual(1);
  });
});
