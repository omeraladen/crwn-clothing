import { createStore , applyMiddleware } from 'redux';

import persistStore from 'redux-persist/es/persistStore'; 

import logger from 'redux-logger'; // we use it to debugging our redux code

import rootReducer from './root-reducer';

export const  middleware = [logger]; // we store the middleware in to array

export const store = createStore(rootReducer , applyMiddleware(...middleware)); // just export

export const persistor = persistStore(store); 
 
export default {store , persistor};


/*
 To Store the cart data in Browser Storage 
 step 1 export persistStore after install redux-persis
 step 2 export store const cose we need it later
 step 3 create const persistor(store)
 step 4 add it to export default
 => Go To root-reducer
*/
