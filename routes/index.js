const express = require("express");
const vehicleController = require("../controllers/vehicleController");
const vehicleFormSchema = require("../form-schemas/vehicle-form");
const validateSchemaMiddleware = require("../middlewares/validate-schema");

const router = express.Router();

router.get("/veiculos", vehicleController.getAllVehicles);
router.get("/veiculos/find", vehicleController.getAllVehiclesByParams);
router.get("/veiculos/:id", vehicleController.getVehicleById);
router.post(
  "/veiculos",
  validateSchemaMiddleware(vehicleFormSchema.createFormValidation),
  vehicleController.createVehicle
);
router.put(
  "/veiculos/:id",
  validateSchemaMiddleware(vehicleFormSchema.putFormValidation),
  vehicleController.putVehicle
);
router.patch("/veiculos/:id", vehicleController.patchVehicle);
router.delete("/veiculos/:id", vehicleController.deleteVehicle);

module.exports = router;
