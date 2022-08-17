import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import orderReducer from './ducks/order';
import locationReducer from './ducks/location';
import { rootwatcher } from './indexSaga';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  orderReducer: orderReducer,
  locationReducer: locationReducer,
});
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootwatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
