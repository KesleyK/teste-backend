const ApiError = require("../error/api-error");

module.exports = (schemaValidator) => {
  return async (req, res, next) => {
    try {
      await schemaValidator.validate(req.body);

      next();
    } catch (err) {
      next(ApiError.badRequest(err.errors[0]));
    }
  };
};
