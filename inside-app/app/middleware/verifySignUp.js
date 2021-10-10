const db = require("../models");
const User = db.user;

//Verify duplicate username
checkDuplicateUsername = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username exist!",
      });
      return;
    } else {
      next();
      return;
    }
  });
};

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
};

module.exports = verifySignUp;
