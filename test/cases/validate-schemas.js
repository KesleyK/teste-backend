exports.create_happy_case = {
  body: {
    veiculo: "Ka",
    marca: "Ford",
  },
};

exports.create_sad_case = {
  body: {
    veiculo: "Ka",
  },
};

exports.put_happy_case = {
  body: {
    veiculo: "Ka",
    marca: "Ford",
    vendido: true,
  },
};

exports.put_sad_case = {
  body: {
    veiculo: "Ka",
    marca: "Ford",
  },
};
