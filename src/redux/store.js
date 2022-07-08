import { createStore  } from 'redux';

import persistStore from 'redux-persist/es/persistStore'; 
import rootReducer from './root-reducer';


export const store = createStore(rootReducer ); 

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
*/
