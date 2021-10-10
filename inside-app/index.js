const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database
const db = require("./app/models");

db.sequelize.sync();

// default route
app.get("/", (req, res) => {
  res.send("App worked!");
});
app.get("/test", (req, res) => {
  res.send(200);
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/message.routes")(app);

// listen server on port
const PORT = process.env.NODE_DOCKER_PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports.app = app;
