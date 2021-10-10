"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("messages", {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        field: "username",
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "username",
        },
      },
      message: {
        type: Sequelize.TEXT,
        field: "message",
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "createdAt",
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updatedAt",
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("messages");
  },
};
