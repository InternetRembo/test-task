import React, { FC } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Header, MainContent } from './components';
import { AppWrapper } from './styled';

import { store } from './redux/redux-store';
import { fetchUserLocationAC } from './redux/order-reducer';
import { useAppDispatch } from './redux/hooks';

type position = {
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
  timestamp: number | null;
};

const App: FC = () => {
  const dispatch = useAppDispatch();

  const successCallback = (position: position) => {
    dispatch(fetchUserLocationAC(position.coords.latitude, position.coords.longitude));
  };

  const errorCallback = (error: any) => {
    console.log(error);
  };

  const getGeo = () => {
    return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  useEffect(() => {
    getGeo();
    return localStorage.clear();
  }, []);

  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <MainContent />
      </AppWrapper>
    </Provider>
  );
};

export default App;
