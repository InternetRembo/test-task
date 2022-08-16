import { put, takeEvery, call, select } from 'redux-saga/effects';
import { FETCH_USER_LOCATION, getUserLocationAC } from '../order-reducer';
import { getUserLocation } from '../api';

function* getUserLocationWorker() {
  let coords = yield select((state) => state.orderReducer.coords);

  const result = yield call(getUserLocation, coords);

  let address = {};

  result.data.results[0]['address_components'].forEach((el) => {
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
  yield takeEvery(FETCH_USER_LOCATION, getUserLocationWorker);
}
