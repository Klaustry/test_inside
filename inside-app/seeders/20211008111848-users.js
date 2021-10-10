var bcrypt = require("bcryptjs");
("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "admin",
        password: bcrypt.hashSync("12345678", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        password: bcrypt.hashSync("12345678", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "usernew",
        password: bcrypt.hashSync("12345678", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
