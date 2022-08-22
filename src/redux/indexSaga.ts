import { all } from 'redux-saga/effects';
import { getProductListWatcher } from './ducks/order';
import { getUserLocationWatcher } from './ducks/location';

export function* rootwatcher() {
  yield all([getProductListWatcher(), getUserLocationWatcher()]);
}
