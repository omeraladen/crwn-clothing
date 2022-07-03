import React  from "react";
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.styles.scss';


const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LH0EdCAj43JXDNTLA2JajNZP79V1sJHQoFUEtRD9csKRxHhYYQVNfNtRZKf0eYDKJ8tvJUCVqR1SHPqBUlIZCgq00G1BAD5v5';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (

        <StripeCheckout
            label="Pay Now"
            name="CROWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    
    )
}

export default StripeCheckoutButton;