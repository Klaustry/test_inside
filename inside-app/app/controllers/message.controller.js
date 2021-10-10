const db = require("../models");
const Message = db.message;

exports.createMessage = (req, res) => {
  // Save User to Database
  Message.create({
    username: req.body.username,
    message: req.body.message,
  })
    .then(() => {
      res.send({ message: "Message add successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.getMessages = (req, res) => {
  const username = req.body.username;
  const message = req.body.message.split(" ");

  if (message[0] && message[0] === "history")
    limit = parseInt(message[1]) ? parseInt(message[1]) : 10;

  // Save User to Database
  Message.findAll({
    attributes: ["message"],
    limit: limit,
    order: [["updatedAt", "DESC"]],
    where: {
      username: username,
    },
  })
    .then((data) => {
      res.send({
        username: limit,
        messages: data.map((el) => {
          return el.message;
        }),
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
