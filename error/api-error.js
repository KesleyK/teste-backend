class ApiError {
  constructor(statusCode, message) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static unauthorized(msg) {
    return new ApiError(401, msg);
  }

  static internalServerError(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;
