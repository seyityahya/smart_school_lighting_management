const User = require("../models/User");
const asyncErrorHandler = require("express-async-handler");

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

  const token = user.generateJwtFromUser();

  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports = {
  register,
};
