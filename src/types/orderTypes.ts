import { OrderActionTypes } from '../redux/ducks/order';

export type Product = {
  name: string;
  price: number;
  summary: string;
  img: string;
  quantity: number;
};
export type ProductList = Product[];

export type OrderState = {
  productList: ProductList;
  shipping: number;
  taxes: number;
};

export type SetProductListAction = {
  type: OrderActionTypes.SET_PRODUCT_LIST;
  payload: ProductList;
};
export type FetchProductListAction = {
  type: OrderActionTypes.FETCH_PRODUCT_LIST;
};

export type OrderActions = SetProductListAction | FetchProductListAction;
