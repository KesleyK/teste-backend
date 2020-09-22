const yup = require("yup");

exports.createFormValidation = yup.object().shape({
  veiculo: yup.string().required("É obrigatório preencher o nome do veículo."),
  marca: yup.string().required("É obrigatório preencher a marca do veículo."),
});

exports.putFormValidation = yup.object().shape({
  veiculo: yup.string().required("É obrigatório preencher o nome do veículo."),
  marca: yup.string().required("É obrigatório preencher a marca do veículo."),
  vendido: yup
    .string()
    .required("É obrigatorio informar o status de venda do veículo."),
});
