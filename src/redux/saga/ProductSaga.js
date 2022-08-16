import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_PRODUCT_LIST, setProductListAC } from '../order-reducer';
import { fetchProducts } from '../api';

function* getProductListWorker() {
  const result = yield call(fetchProducts);
  yield put(setProductListAC(result.data));
}

export function* getProductListWatcher() {
  yield takeEvery(FETCH_PRODUCT_LIST, getProductListWorker);
}
