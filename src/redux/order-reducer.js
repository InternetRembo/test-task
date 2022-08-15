export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const FETCH_USER_LOCATION = 'FETCH_USER_LOCATION';

let initialState = {
  productList: [],
  shipping: null,
  taxes: null,
  userLocation: null,
  coords: { lat: 0, lng: 0 },
};

const orderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCT_LIST: {
      return { ...state, productList: action.productList };
    }
    case GET_USER_LOCATION: {
      return { ...state, userLocation: action.payload };
    }
    case FETCH_USER_LOCATION: {
      return { ...state, coords: action.coords };
    }
    default:
      return state;
  }
};

export const setProductListAC = (productList) => ({
  type: SET_PRODUCT_LIST,
  productList,
});

export const getUserLocationAC = (payload) => ({
  type: GET_USER_LOCATION,
  payload,
});

export const fetchUserLocationAC = (lat, lon) => ({
  type: FETCH_USER_LOCATION,
  coords: {
    lat,
    lon,
  },
});

export const fetchProductListAC = () => ({
  type: FETCH_PRODUCT_LIST,
});

export default orderReducer;
