import {
  FetchProductListAction,
  OrderActions,
  OrderState,
  ProductList,
  SetProductListAction,
} from '../../types/orderTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProducts } from '../../api';

export enum OrderActionTypes {
  SET_PRODUCT_LIST = 'SET_PRODUCT_LIST',
  FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST',
}

let initialState: OrderState = {
  productList: [],
  shipping: 0,
  taxes: 0,
};

const orderReducer = (state = initialState, action: OrderActions): OrderState => {
  switch (action.type) {
    case OrderActionTypes.SET_PRODUCT_LIST: {
      return { ...state, productList: action.payload };
    }
    default:
      return state;
  }
};

export const setProductListAC = (payload: ProductList): SetProductListAction => ({
  type: OrderActionTypes.SET_PRODUCT_LIST,
  payload,
});

export const fetchProductListAC = (): FetchProductListAction => ({
  type: OrderActionTypes.FETCH_PRODUCT_LIST,
});

function* getProductListWorker(): any {
  const result = yield call(fetchProducts);
  yield put(setProductListAC(result.data));
}

export function* getProductListWatcher() {
  yield takeEvery(OrderActionTypes.FETCH_PRODUCT_LIST, getProductListWorker);
}

export default orderReducer;
