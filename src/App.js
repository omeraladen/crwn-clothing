import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SinInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';



function App(){
  return (
    <div> 
    
      
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/> 
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SinInAndSignUpPage}/>
       </Switch>
      </BrowserRouter>
    

    </div>
  );
}
export default App;

// To Fix the ERROR => Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0
// Solution => isnpm install -g sass
//               npm install --save-dev sass 
// ********hello this is new commit is added right now