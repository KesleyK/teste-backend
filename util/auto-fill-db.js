const fs = require("fs");

const Vehicle = require("../models/Vehicle");

const fixturesDataPath = "fixtures/data.json";
const fixturesDataFileFormat = "utf-8";

function getParsedFixturesFile() {
  try {
    const parsedFile = fs.readFileSync(
      fixturesDataPath,
      fixturesDataFileFormat
    );

    return JSON.parse(parsedFile);
  } catch (err) {
    console.log("Falha na leitura do arquivo.");
  }
}

function fillDatabaseHandler() {
  const vehicles = getParsedFixturesFile();

  if (vehicles instanceof Array) {
    console.log("Iniciando o preenchimento da base de dados...");

    let i = 0;
    for (const vehicle of vehicles) {
      console.log(i);
      i++;
      Vehicle.create({
        veiculo: vehicle.veiculo,
        marca: vehicle.marca,
        vendido: vehicle.vendido,
      }).catch(() => {
        console.log("Falha ao preencher o veículo: " + vehicle.veiculo);
      });
    }

    console.log("Banco preenchido!");
  }
}

module.exports = async () => {
  const allVehicles = await Vehicle.find();
  const allVehiclesLength = allVehicles.length;

  if (allVehiclesLength === 0) {
    fillDatabaseHandler();
  }
};
