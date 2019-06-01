import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import cart from './reducers/cartReducer';

export default createStore(
    combineReducers({ cart }), {}, applyMiddleware(logger)
);