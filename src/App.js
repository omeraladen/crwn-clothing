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
 
  // handle any Auth changes On firebase ,  Storing User Data In Our App
  componentDidMount(){
    this.unsubscriberFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
            id: snapshot.id, ...snapshot.data()
            }
          });   
        });
      }

      this.setState({ currentUser: userAuth });
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
export default App;

// To Fix the ERROR => Error: 'node-sass' version 5.0.0 is incompatible with ^4.0.0
// Solution => is npm install -g sass
//               npm install --save-dev sass 
  