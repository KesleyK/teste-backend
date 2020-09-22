const { expect } = require("chai");
const ApiError = require("../error/api-error");
const vehicleFormSchema = require("../form-schemas/vehicle-form");
const validateSchemaMiddleware = require("../middlewares/validate-schema");

const req = require("./cases/validate-schemas");

describe("Create vehicle - form validator", (finish) => {
  it("happy case", () => {
    validateSchemaMiddleware(vehicleFormSchema.createFormValidation)(
      req.create_happy_case,
      {},
      (nextCallback) => {
        expect(nextCallback).to.be.not.null;
      }
    );
  });

  it("sad case", () => {
    validateSchemaMiddleware(vehicleFormSchema.putFormValidation)(
      req.create_sad_case,
      {},
      (nextCallback) => {
        expect(nextCallback).to.be.a.instanceOf(ApiError);
      }
    );
  });
});

describe("Update vehicle (PUT) - form validator", () => {
  it("happy case", () => {
    validateSchemaMiddleware(vehicleFormSchema.putFormValidation)(
      req.put_happy_case,
      {},
      (nextCallback) => {
        expect(nextCallback).to.be.not.null;
      }
    );
  });

  it("sad case", () => {
    validateSchemaMiddleware(vehicleFormSchema.putFormValidation)(
      req.put_sad_case,
      {},
      (nextCallback) => {
        expect(nextCallback).to.be.a.instanceOf(ApiError);
      }
    );
  });
});
