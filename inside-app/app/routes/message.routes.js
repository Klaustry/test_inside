const { checkPermissionJWT } = require("../middleware");
const controller = require("../controllers/message.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/test/create-message",
    [checkPermissionJWT.verifyToken, checkPermissionJWT.checkUser],
    controller.createMessage
  );
  app.get(
    "/api/test/get-messages",
    [checkPermissionJWT.verifyToken, checkPermissionJWT.checkUser],
    controller.getMessages
  );
};
