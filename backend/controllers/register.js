const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");

const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return next(err);
  }
};

const errorTest = (req, res, next) => {
  return next(new CustomError("Custom Error Message", 400));
};

module.exports = {
  register,
  errorTest,
};
