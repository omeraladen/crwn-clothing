import React, {  } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SinInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'



class App extends React.Component{

  // handle any Auth changes On firebase ,  Storing User Data In Our App
  componentDidMount(){
    
    const { setCurrentUser } = this.props;
    
    this.unsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.id,
             ...snapshot.data()
            })
        });
      }
      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount(){ // this mathod Close the Subscribion 
    this.unsubscriberFromAuth();
  }
  

  
  render(){
    return (
      <div> 
      
        
        <BrowserRouter>
        <Header/>
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
// dispatch() mean what aver object you pass on it is it send it to all reducers

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser(user) ) 
});

export default connect(null, mapDispatchToProps)(App);







// To Fix the ERROR => Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0
// Solution => is npm install -g sass
//               npm install --save-dev sass 
  