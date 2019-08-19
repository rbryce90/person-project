require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  useStripe: (req, res) => {

    // console.log("req.body =====>", req.body)
    const stripeToken = req.body;
    // const stripeToken = req.body.body;
    // console.log(stripeToken);
   
    console.log("stripeToken =====> ", stripeToken)
    console.log( 'stripeToken.body===>', stripeToken.body)
    stripe.charges.create(
      {
        amount: 1000,
        currency: "usd",
        description: "Example Charge",
        source: stripeToken.body
        // source: stripeToken.id
      },
      function(err, charge) {
        // console.log("charge", charge);
        if (err) {
          res.send({
            success: false,
            message: "Error"
          });
        } else {
          res.send({
            success: true,
            message: "Success"
          });
        }
      }
    );
  }
};
