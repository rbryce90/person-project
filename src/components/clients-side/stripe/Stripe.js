import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import './stripe.css';

export default class Stripe extends React.Component {
  onToken = token => {
    console.log("onToken", token);
    axios
      .post("/api/stripe", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: token.id
      })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
      });
  };

  render() {
    return (
      <div className='stripe'>
        <h1 style={{ width: "80%", margin: "0 auto", fontSize: "44px" }}>
          Donate to our site so we can keep making content for you!
        </h1>
        <br />

        <div>
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_N93rD2WkRxHsvEWWySb7redc"
          />
        </div>
      </div>
    );
  }
}
