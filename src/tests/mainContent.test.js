import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { MainContent } from '../components';

import { store } from '../redux/redux-store';

it('should mount MainContent', async () => {
  await act(async () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainContent />
        </MemoryRouter>
      </Provider>,
    ),
  );

  const MainContentComponent = screen.getByTestId(/Main/i);
  expect(MainContentComponent).toBeInTheDocument();
});
