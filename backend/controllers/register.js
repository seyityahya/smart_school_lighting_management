const User = require("../models/User");
const asyncErrorHandler = require("express-async-handler");

const register = asyncErrorHandler(async (req, res, next) => {
  const { email, password, role } = req.body;

  const user = await User.create({
    email,
    password,
    role,
  });
  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports = {
  register,
};
