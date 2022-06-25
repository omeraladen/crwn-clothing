/*
    reselect library(Redux) is a very important step to performance
    because it make only the component that you select work
*/
import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector( // go to cart-dropdown.component
    [selectCart],
    cart => cart.cartItems   
    );
    
export const selectCartItemCount = createSelector( // go to cart-icon.component
        [selectCartItems],
        cartItems =>  cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
            );