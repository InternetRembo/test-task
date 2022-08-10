export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';

let initialState = {
  productList: [],
  shipping: null,
  taxes: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST: {
      return { ...state, productList: action.productList };
    }
    default:
      return state;
  }
};

export const setProductListAC = (productList) => {
  return {
    type: SET_PRODUCT_LIST,
    productList,
  };
};
export const fetchProductListAC = () => {
  return {
    type: FETCH_PRODUCT_LIST,
  };
};

export default orderReducer;
