import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { MainContent, PaymentBlock } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';
import userEvent from '@testing-library/user-event';

test('is payment form has mount', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PaymentBlock />
      </MemoryRouter>
    </Provider>,
  );
  const Payment = screen.getByTestId('Payment');
  expect(Payment).toBeInTheDocument();
});

describe('is payment form submit work correctly', () => {
  const user = userEvent.setup();
  const jsdomAlert = window.alert;
  window.alert = () => {};
  const currentRout = '/payment';

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[currentRout]}>
          <MainContent />
        </MemoryRouter>
      </Provider>,
    );
  });
  test('is submit dos not happen if inputs are empty', async () => {
    await user.click(screen.getByText('Pay Securely'));
    expect(screen.queryByText('Thank you for your order!')).not.toBeInTheDocument();
  });
  test('is button redirect user to the order page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Name as it appears on your card/i), 'PETRO PETRENKO');
    await user.type(screen.getByPlaceholderText(/XXXX XXXX XXXX XXXX XXXX/i), '4444111144441111');
    await user.type(screen.getByPlaceholderText('MM/YY'), '1234');
    await user.type(screen.getByTestId('code'), '123');

    await user.click(screen.getByText('Pay Securely'));

    expect(screen.queryByText(/Cardholder Name/i)).not.toBeInTheDocument();
  });
  test('is button redirect user to the order page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Name as it appears on your card/i), 'petro petrenko');
    await user.type(screen.getByPlaceholderText(/XXXX XXXX XXXX XXXX XXXX/i), '12341234');
    await user.type(screen.getByPlaceholderText('MM/YY'), '1w23');
    await user.type(screen.getByTestId('code'), '12+');

    await user.click(screen.getByText('Pay Securely'));

    expect(screen.queryByText('Cardholder Name')).toBeInTheDocument();
  });
});
