import { configureStore , applyMiddleware } from 'redux';
import logger from 'redux-logger'; // we use it to debugging our redux code

import rootReducer from './root-reducer';

const  middleware = [logger]; // we store the middleware in to array

const store = configureStore(rootReducer , applyMiddleware(...middleware));

export default store;