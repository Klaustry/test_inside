"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("messages", [
      {
        username: "admin",
        message: "This first message of admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "admin",
        message: "This second message of admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "admin",
        message: "This third message of admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        message: "This first message of user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        message: "This second message of user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        message: "This third message of user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "usernew",
        message: "This first message of usernew",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "usernew",
        message: "This second message of usernew",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "usernew",
        message: "This third message of usernew",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
