import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {/* the condition to Signin and Out Using => auth.signOut() */}
            {currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) :
            (<Link className="option" to="/signin">SIGN IN</Link>)}
        
        </div>
    </div>
); 

// mapStateToProps => this name is stander with redux codebase
const mapStateToProps = () => ({
    currentUser : state.user.currentUser  // we need to get (root-reducer => user => currentUser )
})

export default connect(mapStateToProps)(Header);