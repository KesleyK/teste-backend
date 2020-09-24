const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const autoFillDB = require("./util/auto-fill-db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { mongodb_key } = require("./environments");

const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();

app.use(bodyParser.json());
app.use(routes);
app.use(errorHandlerMiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose
  .connect(mongodb_key, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on 3000.");
      autoFillDB();
    });
  });
