import { render, screen } from '@testing-library/react';
import { MainContent } from '../index';
import { store } from '../../redux/redux-store';
import { Provider } from 'react-redux';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

test('is MainContent has mount', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MainContent />
      </MemoryRouter>
    </Provider>,
  );
  const MainContentComponent = screen.getByTestId(/Main/i);
  expect(MainContentComponent).toBeInTheDocument();
});
