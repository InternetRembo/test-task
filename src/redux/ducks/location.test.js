import locationReducer, { LocationActionTypes } from './location';

let testState = {
  userLocation: {
    flat: '',
    street: '',
    city: '',
    country: '',
    zip: '',
  },
  coords: { lat: 0, lng: 0 },
};

describe('location duck reducer', () => {
  test('should return initial state when the action is unexpected ', () => {
    const testReducer = locationReducer(testState, {});
    expect(testReducer).toEqual(testState);
  });

  test('state.userLocation should be updated when the action type is GET_USER_LOCATION ', () => {
    const testReducer = locationReducer(testState, {
      type: LocationActionTypes.GET_USER_LOCATION,
      payload: {
        flat: 'string',
        street: 'string',
        city: 'string',
        country: 'string',
        zip: 'string',
      },
    });
    expect(testReducer.userLocation).not.toEqual(testState.userLocation);
    expect(testReducer.coords).toEqual(testState.coords);
  });

  test('state.coords should be updated when the action type is GET_USER_COORDINATES', () => {
    const testReducer = locationReducer(testState, {
      type: LocationActionTypes.GET_USER_COORDINATES,
      payload: {
        lat: 10,
        lng: 12,
      },
    });
    expect(testReducer.userLocation).toEqual(testState.userLocation);
    expect(testReducer.coords).not.toEqual(testState.coords);
  });
});
