const Vehicle = require("../models/Vehicle");
const ApiError = require("../error/api-error");

exports.getAllVehicles = async (req, res, next) => {
  const fetchedVehicles = await Vehicle.find();

  return res.status(200).json(fetchedVehicles);
};

exports.getAllVehiclesByParams = async (req, res, next) => {
  const { q } = req.query;

  const fetchedVehicles = await Vehicle.find().select(q);

  return res.status(200).json(fetchedVehicles);
};

exports.getVehicleById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const fetchedVechicle = await Vehicle.findById(id);

    return res.status(200).json(fetchedVechicle);
  } catch (err) {
    next(ApiError.badRequest("Não foi possível buscar os dados do veículo."));
  }
};

exports.createVehicle = async (req, res, next) => {
  try {
    const formData = {
      veiculo: req.body.veiculo,
      marca: req.body.marca,
      ano: req.body.ano,
      descricao: req.body.descricao,
      vendido: req.body.vendido || false,
    };

    const createdVehicle = await Vehicle.create(formData);

    return res.status(201).json(createdVehicle);
  } catch (err) {
    next(ApiError.badRequest("Não foi possível cadastrar novo veículo."));
  }
};

exports.putVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;

    const formData = {
      veiculo: req.body.veiculo,
      marca: req.body.marca,
      ano: req.body.ano,
      descricao: req.body.descricao,
      vendido: req.body.vendido,
    };

    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { _id: id },
      formData,
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return res.status(200).json(updatedVehicle);
  } catch (err) {
    next(ApiError.badRequest("Não foi possível atualizar os dados veículo."));
  }
};

exports.patchVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const formData = { ...req.body };

    const fetchedVechicle = await Vehicle.findById(id);

    fetchedVechicle.veiculo = formData.veiculo || fetchedVechicle.veiculo;
    fetchedVechicle.marca = formData.marca || fetchedVechicle.marca;
    fetchedVechicle.ano = formData.ano || fetchedVechicle.ano;
    fetchedVechicle.descricao = formData.descricao || fetchedVechicle.descricao;

    if (formData.vendido !== undefined) {
      fetchedVechicle.vendido = formData.vendido;
    } else {
      fetchedVechicle.vendido = fetchedVechicle.vendido;
    }

    await fetchedVechicle.save().catch((err) => console.log(err));

    return res.status(200).json(fetchedVechicle);
  } catch (err) {
    next(ApiError.badRequest("Não foi possível atualizar os dados veículo."));
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Vehicle.findByIdAndDelete(id);

    return res.status(200).json({ deleted: true, deletedId: id });
  } catch (err) {
    next(ApiError.badRequest("Não foi deletar o veículo selecionado."));
  }
};
