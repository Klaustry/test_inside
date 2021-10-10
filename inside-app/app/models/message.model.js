module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    username: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });

  return Message;
};
