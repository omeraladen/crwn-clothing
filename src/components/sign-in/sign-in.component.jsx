import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import'./sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }
                            // the Form who responed the events 
 handleSubmit = event => { 
     event.preventDefault();
    
     this.setState({ email: '',password:'' })
    }


    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name]:value })
    }
    render(){
    return(
    <div className="sign-in">
        <h2>I already have account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}> 
        <FormInput  type="email" 
                    handleChage={this.handleChange} 
                    value={this.state.email} 
                    label ="emial"
                    required />
            
        <FormInput  type="password"
                    name="password"
                    value={this.state.email}
                    handleChage={this.handleChange}
                    label = "password"
                    required />

            <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >  
            Sign in With Google  </CustomButton>
            </div>
        </form>
    </div>
    );
    }
}

export default SignIn;