import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import logger from 'redux-logger';
import cart from './reducers/cartReducer';
import user from './reducers/userReducer';
import persistState from 'redux-localstorage'

const enhancer = compose(
    applyMiddleware(logger),
    persistState(/*paths, config*/),
);

export default createStore(
    combineReducers({ cart, user }), {}, enhancer
);
