import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { MainContent, PaymentBlock } from '../../components';

import { store } from '../../redux/redux-store';

it('should mount payment form', () => {
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
  it('submit should not happen if inputs are empty', async () => {
    await user.click(screen.getByText('Pay Securely'));
    expect(screen.queryByText('Thank you for your order!')).not.toBeInTheDocument();
  });
  it('button should redirect user to the order page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Name as it appears on your card/i), 'PETRO PETRENKO');
    await user.type(screen.getByPlaceholderText(/XXXX XXXX XXXX XXXX XXXX/i), '4444111144441111');
    await user.type(screen.getByPlaceholderText('MM/YY'), '1234');
    await user.type(screen.getByTestId('code'), '123');

    await user.click(screen.getByText('Pay Securely'));

    expect(screen.queryByText(/Cardholder Name/i)).not.toBeInTheDocument();
  });
  it('button should redirect user to the order page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Name as it appears on your card/i), 'petro petrenko');
    await user.type(screen.getByPlaceholderText(/XXXX XXXX XXXX XXXX XXXX/i), '12341234');
    await user.type(screen.getByPlaceholderText('MM/YY'), '1w23');
    await user.type(screen.getByTestId('code'), '12+');

    await user.click(screen.getByText('Pay Securely'));

    expect(screen.queryByText('Cardholder Name')).toBeInTheDocument();
  });
});
