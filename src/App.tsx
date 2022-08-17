import React, { FC } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Header, MainContent } from './components';
import { AppWrapper } from './styled';

import { store } from './redux/redux-store';
import { getUserCoordinatesAC } from './redux/ducks/location';
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
    dispatch(getUserCoordinatesAC({ lat: position.coords.latitude, lng: position.coords.longitude }));
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
  }, [getGeo()]);

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
