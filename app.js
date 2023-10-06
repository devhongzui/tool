// CUSTOM: import .env file
require("dotenv").config();

let express = require("express");
let app = express();

let fs = require("fs");
let configs = {
  cors: JSON.parse(fs.readFileSync("./configs/cors.json", "utf-8")),
  swagger: JSON.parse(fs.readFileSync("./configs/swagger.json", "utf-8")),
  url: JSON.parse(fs.readFileSync("./configs/url.json", "utf-8")),
};

configs.swagger.swaggerDefinition.host = process.env.APP_HOST;
configs.swagger.swaggerDefinition.schemes = [process.env.APP_METHOD];

let cors = require("cors")(configs.cors);
let logger = require("morgan")("dev");
let cookieParser = require("cookie-parser")();

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(cookieParser);
app.use(express.static("./public"));
app.use(express.urlencoded(configs.url));

app.use("/api/random-string", require("./routes/api/random-string.js"));
app.use("/api/minify-js", require("./routes/api/minify-js.js"));

let swaggerUi = require("swagger-ui-express");
let swaggerDoc = require("swagger-jsdoc")(configs.swagger);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

let error = require("./controllers/errors");

app.use(error.pageNotFound);
app.use(error.errorHandle);

module.exports = app;
