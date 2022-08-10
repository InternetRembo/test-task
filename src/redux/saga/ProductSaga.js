import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_PRODUCT_LIST, setProductListAC } from '../order-reducer';
import * as axios from 'axios';

const fetchProducts = () => {
  return axios.get(`https://mocki.io/v1/59eb2e27-8414-4add-acf2-55d25692a20d`);

};

function* getProductListWorker() {
  const result = yield call(fetchProducts);
  yield put(setProductListAC(result.data));
}

export function* getProductListWatcher() {
  yield takeEvery(FETCH_PRODUCT_LIST, getProductListWorker);
}
