import { OrderActionTypes } from '../redux/order-reducer';

export type Product = {
  name: string;
  price: number;
  summary: string;
  img: string;
  quantity: number;
};
export type ProductList = Product[];

export type Coordinates = { lat: number | null; lng: number | null };

export type UserLocation = {
  flat: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

export type OrderState = {
  productList: ProductList;
  shipping: number;
  taxes: number;
  userLocation: UserLocation;
  coords: Coordinates;
};

export type SetProductListAction = {
  type: OrderActionTypes.SET_PRODUCT_LIST;
  payload: ProductList;
};
export type GetUserLocationAction = {
  type: OrderActionTypes.GET_USER_LOCATION;
  payload: UserLocation;
};
export type GetUserCoordinatesAction = {
  type: OrderActionTypes.GET_USER_COORDINATES;
  payload: Coordinates;
};
export type FetchProductListAction = {
  type: OrderActionTypes.FETCH_PRODUCT_LIST;
};

export type OrderActions =
  | GetUserCoordinatesAction
  | GetUserLocationAction
  | SetProductListAction
  | FetchProductListAction;
