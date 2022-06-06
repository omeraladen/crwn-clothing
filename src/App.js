import React from 'react';
import { connect } from 'react-redux';
import {
  Switch, Route, Redirect

} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends React.Component{

  // handle any Auth changes On firebase ,  Storing User Data In Our App
  componentDidMount(){
    
    const { setCurrentUser } = this.props;
    
    this.nonsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {
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
  

  componentWillUnmount(){ // this method Close the Subscription 
    this.nonsubscriberFromAuth();
  }
  
  
  
  render(){
    return (
      <div> 
      
        
        
        
       
       
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
       
      
  
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// const mapStateToProps = ({ user }) => ({
//   CurrentUser : user.CurrentUser
// });

// // dispatch() mean what aver object you pass on it is it send it to all reducers

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch( setCurrentUser(user) ) 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);







// To Fix the ERROR => Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0
// Solution => is npm install -g sass
//               npm install --save-dev sass 
  