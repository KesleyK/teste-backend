const mongoose = require("mongoose");

const Vehicle = new mongoose.Schema(
  {
    veiculo: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    ano: {
      type: Date,
      required: false,
    },
    descricao: {
      type: String,
      required: false,
    },
    vendido: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

module.exports = mongoose.model("Vehicle", Vehicle);
