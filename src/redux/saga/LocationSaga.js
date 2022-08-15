import { put, takeEvery, call, select } from 'redux-saga/effects';
import { FETCH_USER_LOCATION, getUserLocationAC } from '../order-reducer';
import { getUserLocation } from '../api/api';

function* getUserLocationWorker() {
  let coords = yield select((state) => state.orderReducer.coords);
  const result = yield call(getUserLocation, coords);
  yield put(getUserLocationAC(result.data.results));
}

export function* getUserLocationWatcher() {
  yield takeEvery(FETCH_USER_LOCATION, getUserLocationWorker);
}
