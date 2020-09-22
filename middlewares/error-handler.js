const ApiError = require("../error/api-error");

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({
    error: "Não foi possível executar ação. Tente novamente mais tarde.",
  });
};
