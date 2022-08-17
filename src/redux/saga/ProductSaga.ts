import { put, takeEvery, call } from 'redux-saga/effects';
import { OrderActionTypes, setProductListAC } from '../order-reducer';
import { fetchProducts } from '../../api';

function* getProductListWorker(): any {
  const result = yield call(fetchProducts);
  yield put(setProductListAC(result.data));
}

export function* getProductListWatcher() {
  yield takeEvery(OrderActionTypes.FETCH_PRODUCT_LIST, getProductListWorker);
}
