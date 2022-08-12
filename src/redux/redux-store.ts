import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import orderReducer from './order-reducer';
import { rootwatcher } from './saga/idex';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  orderReducer: orderReducer,
});
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootwatcher);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
