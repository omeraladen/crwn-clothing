import { createStore ,applyMiddleware  } from 'redux';

import persistStore from 'redux-persist/es/persistStore'; 
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  
  export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export const persistor = persistStore(store); 



const exportedObject = {
    store , persistStore
}
 
export default exportedObject;


/*
 To Store the cart data in Browser Storage 
 step 1 export persistStore after install redux-persis
 step 2 export store const cose we need it later
 step 3 create const persistor(store)
 step 4 add it to export default
 => Go To root-reducer


 Apply a Redux MiddleWare : 
import { createStore ,applyMiddleware  } from 'redux';
import logger from 'redux-logger';
const middlewares = [];
 if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  export const store = createStore(rootReducer, applyMiddleware(...middlewares));
*/
