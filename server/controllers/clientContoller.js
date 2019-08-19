module.exports = {
  getUsers: (req, res, next) => {
    const db = req.app.get("db");
    db.get_users().then(users => {
      console.log(users);
      res.status(200).json(users);
    });
  }
};
