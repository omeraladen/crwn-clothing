import React, {  } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SinInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component{
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }
 
  // handle any Auth changes On firebase
  componentDidMount(){
    this.unsubscriberFromAuth = auth.onAuthStateChanged( async user => {

      // this.setState({ currentUser: user });

      createUserProfileDocument(user);
    });
  }

  componentWillUnmount(){ // this mathod Close the Subscribion 
    this.unsubscriberFromAuth();
  }
  

  
  render(){
    return (
      <div> 
      
        
        <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/> 
            <Route  path='/shop' component={ShopPage}/>
            <Route  path='/signin' component={SinInAndSignUpPage}/>
         </Switch>
        </BrowserRouter>
      
  
      </div>
    );
  }
}
export default App;

// To Fix the ERROR => Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0
// Solution => is npm install -g sass
//               npm install --save-dev sass 
  