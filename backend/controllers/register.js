const User = require("../models/User");

const register = async (req, res, next) => {
  const name = "enes gücükoğlu4";
  const email = "enes4@gmail.com";
  const password = "123456";

  const user = await User.create({
    name,
    email,
    password,
  });
  res.status(200).json({
    success: true,
    data: user,
  });
};

module.exports = {
  register,
};
