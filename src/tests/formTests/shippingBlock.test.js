import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { MainContent, ShippingBlock } from '../../components';

import { store } from '../../redux/redux-store';

describe('is shipping components has mount', () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <MemoryRouter>
            <ShippingBlock />
          </MemoryRouter>
        </Provider>,
      ),
    );
  });

  it('should mount shipping form ', async () => {
    const Shipping = screen.getByText(/Shipping Info/i);
    expect(Shipping).toBeInTheDocument();
  });

  it('should mount address form ', () => {
    const Address = screen.getByText(/Address/i);
    expect(Address).toBeInTheDocument();
  });
});

describe('is shipping form submit work correctly', () => {
  const user = userEvent.setup();

  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <MemoryRouter>
            <MainContent />
          </MemoryRouter>
        </Provider>,
      ),
    );
  });

  it('submit should not happen if inputs are empty', async () => {
    await user.click(screen.getByText('Continue'));
    expect(screen.queryByText(/Billing Information/i)).not.toBeInTheDocument();
  });

  test('is button redirect user to the billing page after successful submit', async () => {
    await user.type(screen.getByPlaceholderText(/Full name/i), 'Petro Petrenko');
    await user.type(screen.getByPlaceholderText(/Daytime Phone/i), '0661155156');
    await user.type(screen.getByPlaceholderText(/Street Address/i), 'street');
    await user.type(screen.getByPlaceholderText(/City/i), 'Lviv');
    await user.type(screen.getByPlaceholderText(/ZIP/i), '55555');
    await user.selectOptions(screen.getByTestId(/selector/i), 'Ukraine');

    await user.click(screen.getByText('Continue'));

    expect(screen.queryByText(/Billing Information/i)).toBeInTheDocument();
  });

  it('submit should not happen if inputs values are incorrect', async () => {
    await user.type(screen.getByPlaceholderText(/Full name/i), 'Petro7Petrenko');
    await user.type(screen.getByPlaceholderText(/Daytime Phone/i), '0661155156646484');
    await user.type(screen.getByPlaceholderText(/Street Address/i), 'A');
    await user.type(screen.getByPlaceholderText(/City/i), 'Invalid city 12321321');
    await user.type(screen.getByPlaceholderText(/ZIP/i), 'zip');
    await user.selectOptions(screen.getByTestId(/selector/i), 'Country');

    await user.click(screen.getByText('Continue'));

    expect(screen.queryByText(/Billing Information/i)).not.toBeInTheDocument();
  });
});
