import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector } from 'reselect';     
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/cart/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer , LogoContainer , OptionsContainer , OptionsLink  } from './header.styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer >
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>

        <OptionsContainer>
            <OptionsLink to="/shop">SHOP</OptionsLink>
            <OptionsLink to="/shop">CONTACT</OptionsLink>
            {/* the condition to Signing and Out Using => auth.signOut() */}
            {currentUser ? (<OptionsLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionsLink>) :
            (<OptionsLink  to="/signin">SIGN IN</OptionsLink>)}
        
        <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
); 

// mapStateToProps => this name is stander with redux codebase
// with advance way to destructor the user and cart
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header); 