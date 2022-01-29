import React from 'react';

import './stripe-button.styles.scss'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price *100;
    const publishKey = 'pk_test_51JhUC0SHYavBrnkB0YkInWnHoLejYcwhH91erVG9TsoDs51fU4CkDkACSTWwnkrgkms44MAXulkZxhs08LewEJI900rJj6gpzM';
    const onToken = token=>{
        console.log(token);
        alert("Payment successfull");
    }
    return(
        <StripeCheckout
            label= 'Pay Now'    
            name ='ASH Ecom Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
             
        />
    )
}
export default StripeCheckoutButton; 