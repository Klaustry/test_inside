const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  const username = req.body.username;
  const bearerHeader = req.headers["authorization"];
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  let token = bearerToken;

  if (!token) {
    return res.status(403).send({
      message: "No token!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    req.username = username;
    next();
  });
};

checkUser = (req, res, next) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ["username"],
  }).then((data) => {
    if (req.username === data.username) {
      next();
      return;
    }
    res.status(403).send({
      message: "Not your token!",
    });
    return;
  });
};

const checkPermissionJWT = {
  verifyToken: verifyToken,
  checkUser: checkUser,
};
module.exports = checkPermissionJWT;
