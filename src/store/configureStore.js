// config redux store

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentonly'
import createSagaMiddleware from 'redux-saga'


const configureStore = (reducer) => {
  const sagaMiddleware = createSagaMiddleware();

  // tslint:disable-next-line:prefer-array-literal
  const middlewares = [
    sagaMiddleware,
  ];

  const initialState = {};

  const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),
    );

  store.runSaga = sagaMiddleware.run;


  return store;
};


export default configureStore
