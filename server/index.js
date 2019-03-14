const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const clientController = require("./controllers/clientContoller");
const bcryptController = require("./controllers/bcryptController");
const adminController = require("./controllers/adminController");
const blogController = require("../server/controllers/blogController");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use( express.static( `${__dirname}/../build` ) );


massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to db");
});


app.get("/api/users", clientController.getUsers);

app.get("/api/admins", adminController.getAdmins);

app.get("/api/blogs", blogController.adminBlog);
app.get("/api/blog/:blog_id", blogController.getBlog);
app.post('/api/blog', blogController.postBlog);
app.delete('/api/blog/:blog_id', blogController.deleteBlog);
app.put('/api/blog/:blog_id/:blog_body', blogController.updateBlog);

app.post("/register", bcryptController.encryptPassword);
app.post("/login", bcryptController.loginUser);

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/api/stripe", (req, res) => {
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
});

function ensureLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}

app.get("/secure-data", ensureLoggedIn, (req, res) => {
  res.json({ someSecureData: 123 });
});

app.get("/", (req, res) => res.status(200).json("its working"));

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})
