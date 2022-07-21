import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown.styles';
const CartDropdown = ({ cartItems , history , dispatch }) =>(
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (    // if the cart length is 0 print empty massage

                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))

                ) : (
                <EmptyMessageContainer>You Cart is Empty!</EmptyMessageContainer>
            ) 
           }
        </CartItemsContainer>

        <CartDropdownButton onClick ={ () => {

            history.push("/checkout");
            dispatch(toggleCartHidden()); // To Remove the Dropdown-cart after open checkout-page
          
          } }>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));