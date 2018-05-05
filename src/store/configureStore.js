// config redux store
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentonly'
import createSagaMiddleware from 'redux-saga'


const configureStore = (reducer) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ];

    const store = createStore(
        reducer,
        {},
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),
    );

    store.runSaga = sagaMiddleware.run;


    return store;
};


export default configureStore
