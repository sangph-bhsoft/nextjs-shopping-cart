import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { AppState } from '../types';
import rootSaga from './sagas';

export const makeStore: MakeStore<AppState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<AppState>(makeStore, { debug: true });
