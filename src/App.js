import React from 'react';
import styled from 'styled-components';

import { Header, MainContent } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';

const AppWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: #e5e1ee;
  @media (max-width: 576px) {
    padding: 0 30px;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <MainContent />
      </AppWrapper>
    </Provider>
  );
}

export default App;
