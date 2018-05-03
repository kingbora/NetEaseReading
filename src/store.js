/**
 * Created by wenbo.kuang on 2018/4/25.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducer';
import {createBrowserHistory} from 'history';
import { routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(createBrowserHistory()));

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            middleware = compose(middleware, devToolsExtension());
        } else {
            middleware = compose(middleware, (f) => f);
        }
    }

    const store = createStore(createReducer(), middleware);
    sagaMiddleware.run(rootSaga);
    if (module.hot) {
        module.hot.accept( ()=> {
            const nextRootReducer = require('./reducer').default;
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}