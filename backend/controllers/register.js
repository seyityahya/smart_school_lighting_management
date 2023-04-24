const User = require("../models/User");
const asyncErrorHandler = require("express-async-handler");
const sendJwtToClient = require("../helpers/authorization/sendJwtToClient");

const register = asyncErrorHandler(async (req, res, next) => {
  const input = req.body;

  // const user = await User.create({
  //   email,
  //   password,
  //   role,
  // });
  const user = new User(input);
  const data = await user.save();
  const userData = data.toObject();

  sendJwtToClient(data, res);
});

module.exports = {
  register,
};
