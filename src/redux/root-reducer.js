import { combineReducers } from 'redux';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';               // use local storage as default storage

import useReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './cart/directory/directory.reducer';
import shopReducer from './shop/shop.reducer';



const persistConfig = {
    key: 'root', // means we want to store from root
    storage,                     
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: useReducer, // user is handled by firebase Auth
    cart:cartReducer, // we want to persist cart to store it data in local          
    directory: directoryReducer,
    shop:shopReducer       
});
 

 export default persistReducer(
    persistConfig,
    rootReducer                     
);

/*

 step 1 import storage , persistReducer
 step 2 create const persistConfig contain key , storage , whitelist of what we need to store
 step 3 create rootReducer contain all method you have
 step 4 export default as persistReducer(    persistConfig , rootReducer  )
 => Go To index
*/
