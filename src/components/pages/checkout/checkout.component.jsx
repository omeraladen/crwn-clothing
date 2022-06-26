import React  from "react";

import { connect } from "react-redux/es/exports";
import {  createStructuredSelector } from "reselect";
import { selectCartItems , selectCartTotal} from "../../../redux/cart/cart.selector";

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
 {cartItems.map(cartItem => cartItem.name)}

            <div className="total">
                <span>TOTAL : ${total}</span>
            </div>

    </div>
);
// we need to connect the items that user select to checkout-page
// gos to cart.selector 
const mapStateToProps = createStructuredSelector({ 
    cartItems : selectCartItems,
    total     :selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);