import { all } from 'redux-saga/effects';
import { getProductListWatcher } from './ProductSaga';

export function* rootwatcher() {
  yield all([getProductListWatcher()]);
}
