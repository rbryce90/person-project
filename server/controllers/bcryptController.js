const bcrypt = require("bcrypt");
const saltRounds = 12;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// require("dotenv").config();

// const client = require("twilio")(accountSid, authToken);

module.exports = {
  encryptPassword: (req, res, next) => {
    console.log("hit");
    console.log("encryptPassword", req, res);
    const db = req.app.get("db");
    const {
      first_name,
      last_name,
      phone_number,
      email,
      username,
      password
    } = req.body;
    bcrypt
      .hash(password, saltRounds)
      .then(hashedPassword => {
        db.create_user([
          first_name,
          last_name,
          phone_number,
          email,
          username,
          hashedPassword
        ])
          .then(newUser => {
            console.log(
              "hit - 3",
              "newUser===>",
              newUser,
              "req.session===>",
              req.session
            );
            // let { first_name, last_name, phone_number } = req.body;
            // let message =
            //   "New User " +
            //   first_name +
            //   " " +
            //   last_name +
            //   " their phone number is " +
            //   phone_number;
            // client.messages.create({
            //   to: "+14093387520",
            //   from: "+14092455543",
            //   body: message
            // });
            req.session.user = newUser;
            console.log("req.session.user  ==>", req.session.user);
            res.status(200).json(req.session.user);
          })
          .catch(error => {
            if (error.message.match(/duplicate key/)) {
              res.status(409).json({ message: "That user already exists" });
            } else {
              res.status(500).json({
                message:
                  "An error occurred on the server, sending FBI to your house!!!!!!"
              });
            }
          });
      })
      .catch(err => console.log(err));
  },

  loginUser: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.find_user(username).then(user => {
      console.log("Login user====>", user);
      if (user.length) {
        bcrypt.compare(password, user[0].password).then(passwordMatch => {
          if (passwordMatch) {
            req.session.user = user[0];
            res.status(200).json(req.session.user);
          } else {
            res.status(403).json({ message: "invalid password" });
          }
        });
      } else {
        res
          .status(403)
          .json({ message: "I dont know know who that is!!! get outta here!" });
      }
    });
  }
};
