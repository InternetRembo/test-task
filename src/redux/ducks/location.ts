import { call, put, select, takeEvery } from 'redux-saga/effects';

import {
  Coordinates,
  GetUserCoordinatesAction,
  GetUserLocationAction,
  LocationActions,
  LocationState,
  UserLocation,
} from '../../types/locationTypes';
import { getUserLocation } from '../../api';

export enum LocationActionTypes {
  GET_USER_LOCATION = 'GET_USER_LOCATION',
  GET_USER_COORDINATES = 'GET_USER_COORDINATES',
}

let initialState: LocationState = {
  userLocation: {
    flat: '',
    street: '',
    city: '',
    country: '',
    zip: '',
  },
  coords: { lat: 0, lng: 0 },
};

const locationReducer = (state = initialState, action: LocationActions): LocationState => {
  switch (action.type) {
    case LocationActionTypes.GET_USER_LOCATION: {
      return { ...state, userLocation: action.payload };
    }
    case LocationActionTypes.GET_USER_COORDINATES: {
      return { ...state, coords: action.payload };
    }
    default:
      return state;
  }
};

export const getUserLocationAC = (payload: UserLocation): GetUserLocationAction => ({
  type: LocationActionTypes.GET_USER_LOCATION,
  payload,
});

export const getUserCoordinatesAC = (payload: Coordinates): GetUserCoordinatesAction => ({
  type: LocationActionTypes.GET_USER_COORDINATES,
  payload,
});

function* getUserLocationWorker(): any {
  let coords = yield select((state) => state.locationReducer.coords);

  const result = yield call(getUserLocation, coords);

  type AddressElement = {
    long_name: string;
    short_name: string;
    types: string[];
  };

  let address: UserLocation = {
    flat: '',
    street: '',
    city: '',
    country: '',
    zip: '',
  };

  result.data.results[0]['address_components'].forEach((el: AddressElement) => {
    switch (el.types[0]) {
      case 'street_number': {
        address.flat = el.long_name;
        break;
      }
      case 'route': {
        address.street = el.long_name;
        break;
      }
      case 'locality': {
        address.city = el.long_name;
        break;
      }
      case 'country': {
        address.country = el.long_name;
        break;
      }
      case 'postal_code': {
        address.zip = el.long_name;
        break;
      }
    }
  });

  yield put(getUserLocationAC(address));
}

export function* getUserLocationWatcher() {
  yield takeEvery(LocationActionTypes.GET_USER_COORDINATES, getUserLocationWorker);
}

export default locationReducer;
