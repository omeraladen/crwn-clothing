import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';  

import {store , persistor}  from './redux/store'; 



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     
    <PersistGate persistor={persistor}>      
      <App />    
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

/*
  redux-persis available for different platform like ReactNative - electron.js
 To Store the cart data in Browser Storage 

 step 1 export PersistGate
 step 2 add persistor with store
 step 3 wrap the <App/> with <PersistGate> component

*/
