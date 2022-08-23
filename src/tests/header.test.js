import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Header } from '../components';
import { store } from '../redux/redux-store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
});

it(' header should mount', () => {
  const HeaderComponent = screen.getByText(/Front-end Developer Test Task/i);
  expect(HeaderComponent).toBeInTheDocument();
});

it('counter should mount', async () => {
  const Counter = screen.getByTestId(/Counter/i);
  expect(Counter).toBeInTheDocument();
});
