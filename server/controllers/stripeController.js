module.exports = {
  useStripe: (req, res) => {
    const stripeToken = req.body;
    // const stripeToken = req.body.body;
    console.log(stripeToken);
    stripe.charges.create(
      {
        amount: 1000,
        currency: "usd",
        description: "Example Charge",
        source: stripeToken.body
        // source: stripeToken.id
      },
      function(err, charge) {
        console.log("charge", charge);
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
