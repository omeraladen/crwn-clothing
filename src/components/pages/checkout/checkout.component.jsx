import React  from "react";

import { connect } from "react-redux/es/exports";
import {  createStructuredSelector } from "reselect";
import { selectCartItems , selectCartTotal} from "../../../redux/cart/cart.selector";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems , total }) => (
    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
 {cartItems.map(cartItem => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
 ))}

            <div className="total"> TOTAL : ${total} </div>
                <div className="test-warning">
                    *Place use the following test credit cart for payment*
                    <br />
                    4242424242424242
                </div>
                <StripeCheckoutButton price={total} />
    </div>
);
// we need to connect the items that user select to checkout-page
// gos to cart.selector 
const mapStateToProps = createStructuredSelector({ 
    cartItems : selectCartItems,
    total     :selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);