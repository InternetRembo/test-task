import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { BillingBlock, MainContent } from '../../index';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';
import userEvent from '@testing-library/user-event';

describe('is billing components has mount', () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <MemoryRouter>
            <BillingBlock />
          </MemoryRouter>
        </Provider>,
      ),
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
});

describe('is billing form submit work correctly', () => {
  const user = userEvent.setup();
  const currentRout = '/billing';

  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[currentRout]}>
            <MainContent />
          </MemoryRouter>
        </Provider>,
      ),
    );
  });

  test('is submit dos not happen if inputs are empty', async () => {
    await user.click(screen.getByText('Continue'));
    expect(await screen.queryByText(/Cardholder Name/i)).not.toBeInTheDocument();
  });

  test('is button redirect user to the payment page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Full name/i), 'Petro Petrenko');
    await user.type(screen.getByPlaceholderText(/Email Address/i), 'petro.ptr@test.com');
    await user.type(screen.getByPlaceholderText(/Street Address/i), 'street');
    await user.type(screen.getByPlaceholderText(/City/i), 'Lviv');
    await user.type(screen.getByPlaceholderText(/ZIP/i), '55555');
    await user.selectOptions(screen.getByTestId(/selector/i), 'Ukraine');

    await user.click(screen.getByText('Continue'));

    expect(screen.queryByText(/Cardholder Name/i)).toBeInTheDocument();
  });

  test('is submit dos not happen if inputs values are incorrect', async () => {
    await user.type(screen.getByPlaceholderText(/Full name/i), 'P.P');
    await user.type(screen.getByPlaceholderText(/Email Address/i), 'petro.petrenko');
    await user.type(screen.getByPlaceholderText(/Street Address/i), '0123');
    await user.type(screen.getByPlaceholderText(/City/i), 'Invalid city name $11#&');
    await user.type(screen.getByPlaceholderText(/ZIP/i), 'Zip');
    await user.selectOptions(screen.getByTestId(/selector/i), 'Country');

    await user.click(screen.getByText('Continue'));

    expect(screen.queryByText(/Cardholder Name/i)).not.toBeInTheDocument();
  });
});
