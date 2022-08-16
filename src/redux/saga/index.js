import { all } from 'redux-saga/effects';
import { getProductListWatcher } from './ProductSaga';
import { getUserLocationWatcher } from './LocationSaga';

export function* rootwatcher() {
  yield all([getProductListWatcher(), getUserLocationWatcher()]);
}
