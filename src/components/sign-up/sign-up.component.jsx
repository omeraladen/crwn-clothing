import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { createUserProfileDocument , auth } from "../../firebase/firebase.utils";
import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        };
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { displayName , email , password , confirmPassword } = this.State;

        if(password !== confirmPassword){
            alert('password dont match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfileDocument(user, { displayName });

            this.setState({  //this well reset the state or clear it
                displayName: '',
                email:'',
                password:'',
                confirmPassword:''
            });
        }catch (erorr){
            console.error(erorr);
        }
    };

    handleChage = event =>{
        const { name , vlaue } = event.target;

        this.setState({ [name]: vlaue });
    };


    render(){
        const { displayName , email , password , confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span > Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChage}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChage}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChage}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmpassword'
                        value={confirmPassword}
                        onChange={this.handleChage}
                        label='Confirom password'
                        required
                    />
    
                    <CustomButton type='submit'> SIGN UP </CustomButton>               
                </form>
            </div>
        )
    }
}

export default SignUp;