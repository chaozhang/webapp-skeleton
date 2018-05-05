// config redux store
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentonly'
import createSagaMiddleware from 'redux-saga'
import profile from 'WebCommon/data/profile'
import gitRepo from 'WebCommon/data/gitRepo'


const APP_NAME = 'webapp-skeleton-react-redux';

const initialState = {profile, gitRepo, APP_NAME};

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

    store.runSaga = sagaMiddleware.run;


    return store;
};


export default configureStore
