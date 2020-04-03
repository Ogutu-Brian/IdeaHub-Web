import { createStore, applyMiddleware } from 'redux';
import createMiddleWare, { SagaMiddleware } from 'redux-saga';

import reducers from './reducers';

const middleWare: SagaMiddleware = createMiddleWare();

const store = createStore(
  reducers,
  applyMiddleware(middleWare)
);

export default store;
