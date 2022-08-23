import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { MainContent } from '../components';

import { store } from '../redux/redux-store';

describe('Routs', () => {
  const user = userEvent.setup();
  it('should routs work correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainContent />
        </MemoryRouter>
      </Provider>,
    );

    await user.click(screen.getByTestId('billingLink'));
    expect(screen.getByText(/Billing Information/i)).toBeInTheDocument();

    await user.click(screen.getByTestId('shippingLink'));
    expect(screen.getByText(/Shipping Info/i)).toBeInTheDocument();

    await user.click(screen.getByTestId('paymentLink'));
    expect(screen.getByTestId('Payment')).toBeInTheDocument();
  });
});