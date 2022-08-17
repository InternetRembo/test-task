import {
  Coordinates,
  FetchProductListAction,
  GetUserCoordinatesAction,
  GetUserLocationAction,
  OrderActions,
  OrderState,
  ProductList,
  SetProductListAction,
  UserLocation,
} from '../types/orderTypes';

export enum OrderActionTypes {
  SET_PRODUCT_LIST = 'SET_PRODUCT_LIST',
  FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST',
  GET_USER_LOCATION = 'GET_USER_LOCATION',
  GET_USER_COORDINATES = 'GET_USER_COORDINATES',
}

let initialState: OrderState = {
  productList: [],
  shipping: 0,
  taxes: 0,
  userLocation: {
    flat: '',
    street: '',
    city: '',
    country: '',
    zip: '',
  },
  coords: { lat: 0, lng: 0 },
};

const orderReducer = (state = initialState, action: OrderActions): OrderState => {
  switch (action.type) {
    case OrderActionTypes.SET_PRODUCT_LIST: {
      return { ...state, productList: action.payload };
    }
    case OrderActionTypes.GET_USER_LOCATION: {
      return { ...state, userLocation: action.payload };
    }
    case OrderActionTypes.GET_USER_COORDINATES: {
      return { ...state, coords: action.payload };
    }
    default:
      return state;
  }
};

export const setProductListAC = (payload: ProductList): SetProductListAction => ({
  type: OrderActionTypes.SET_PRODUCT_LIST,
  payload,
});

export const getUserLocationAC = (payload: UserLocation): GetUserLocationAction => ({
  type: OrderActionTypes.GET_USER_LOCATION,
  payload,
});

export const getUserCoordinatesAC = (payload: Coordinates): GetUserCoordinatesAction => ({
  type: OrderActionTypes.GET_USER_COORDINATES,
  payload,
});

export const fetchProductListAC = (): FetchProductListAction => ({
  type: OrderActionTypes.FETCH_PRODUCT_LIST,
});

export default orderReducer;
