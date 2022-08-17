import { put, takeEvery, call, select } from 'redux-saga/effects';
import { OrderActionTypes, getUserLocationAC } from '../order-reducer';
import { getUserLocation } from '../../api';
import { UserLocation } from '../../types/orderTypes';

function* getUserLocationWorker(): any {
  let coords = yield select((state) => state.orderReducer.coords);

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
  yield takeEvery(OrderActionTypes.GET_USER_COORDINATES, getUserLocationWorker);
}
