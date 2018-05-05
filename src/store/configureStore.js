// config redux store

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentonly'
import createSagaMiddleware from 'redux-saga'
import profile from 'WebCommon/data/profile'


const initialState = {
    profile: profile
}

const configureStore = (reducer) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ];

  

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),
    );


  return store;
};


export default configureStore
