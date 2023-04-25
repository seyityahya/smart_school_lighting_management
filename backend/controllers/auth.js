const User = require("../models/User");
const asyncErrorHandler = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
const CustomError = require("../helpers/error/CustomError");

const register = asyncErrorHandler(async (req, res, next) => {
  const { email, password, role } = req.body;

  const user = await User.create({
    email,
    password,
    role,
  });
  // const user = new User(input);
  // const data = await user.save();

  sendJwtToClient(user, res);
});

const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check your credenials", 400));
  }

  sendJwtToClient(user, res);
});

const logout = asyncErrorHandler(async (req, res, next) => {
  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "logout successfull",
      data: {
        email: req.user.email,
      },
    });
});

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      email: req.user.email,
    },
  });
};

module.exports = {
  register,
  login,
  logout,
  getUser,
};
