import React, { FC } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Header, MainContent } from './components';
import { AppWrapper } from './styled';

import { store } from './redux/redux-store';
import { fetchUserLocationAC } from './redux/order-reducer';
import { useAppDispatch, useAppSelector } from './redux/hooks';

type position = {
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
  timestamp: number | null;
};

const App: FC = () => {
  const userLocation = useAppSelector((state) => state.orderReducer.userLocation);
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

  console.log('userLocation', userLocation);
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
