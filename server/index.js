const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const clientController = require("./controllers/clientContoller");
const bcryptController = require("./controllers/bcryptController");
const adminController = require("./controllers/adminController");
const blogController = require("../server/controllers/blogController");
const stripeController = require("./controllers/stripeController");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

app.use(express.static(`${__dirname}../build`));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  db.init();
  console.log("connected to db");
});

app.get("/api/users", ensureAdmin, clientController.getUsers);

app.get("/api/admins", adminController.getAdmins);

app.get("/api/blogs", blogController.adminBlog);
app.get("/api/blog/:blog_id", blogController.getBlog);
app.post("/api/blog", blogController.postBlog);
app.delete("/api/blog/:blog_id", blogController.deleteBlog);
app.put("/api/blog/:blog_id/:blog_body", blogController.updateBlog);

app.post("/register", bcryptController.encryptPassword);
app.post("/login", bcryptController.loginUser);

app.post("/api/stripe", stripeController.useStripe);

function ensureAdmin(req, res, next) {
  if (req.session.user.admin === true) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}

app.get("/", (req, res) => res.status(200).json({ reqSession: req.session }));

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
