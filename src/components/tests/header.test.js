import { render, screen } from '@testing-library/react';
import { Header } from '../index';
import { store } from '../../redux/redux-store';
import { Provider } from 'react-redux';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
});

test('is header has mount', () => {
  const HeaderComponent = screen.getByText(/Front-end Developer Test Task/i);
  expect(HeaderComponent).toBeInTheDocument();
});

test('is counter has mount', async () => {
  const Counter = screen.getByTestId(/Counter/i);
  expect(Counter).toBeInTheDocument();
});
