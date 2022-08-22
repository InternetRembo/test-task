import orderReducer, { OrderActionTypes } from './order';
import locationReducer from './location';

describe('order duck reducer', () => {
  let testState = {
    productList: [],
    shipping: 0,
    taxes: 0,
  };


  test('should return initial state when the action is unexpected ', () => {
    const testReducer = orderReducer(testState, {});
    expect(testReducer).toEqual(testState);
  });

  test('state.productList should be updated when the action type is SET_PRODUCT_LIST ', () => {
    let testPayload = [
      {
        name: 'string',
        price: 'number',
        summary: 'string',
        img: 'string',
        quantity: 'number',
      },
    ];
    const testReducer = orderReducer(testState, {
      type: OrderActionTypes.SET_PRODUCT_LIST,
      payload: testPayload,
    });
    expect(testReducer).not.toEqual(testState);
  });
});
