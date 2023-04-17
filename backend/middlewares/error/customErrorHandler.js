const customErrorHandler = (err, req, res, next) => {
  let CustomError = err;
  console.log(CustomError.message, CustomError.status);
  res.status(400).json({
    success: false,
  });
};

module.exports = customErrorHandler;
