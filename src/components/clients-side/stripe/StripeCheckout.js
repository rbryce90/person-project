import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
 onToken = ""

 render() {
   return (
     <StripeCheckout
       amount="500"
       billingAddress
       description="Awesome Product"
       // image="https://yourdomain.tld/images/logo.svg"
       locale="auto"
       name="YourDomain.tld"
       stripeKey="pk_test_N93rD2WkRxHsvEWWySb7redc"
       token={this.onToken}
       zipCode
     />
   )
 }
}