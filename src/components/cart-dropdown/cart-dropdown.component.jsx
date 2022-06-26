import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import'./cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems , history }) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (    // if the cart length is 0 print empty massage

                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))

                ) : (
                <span className="empty-massage">You Cart is Empty!</span>
            ) 
           }
        </div>

        <CustomButton onClick ={ () => history.push("/checkout") }>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));