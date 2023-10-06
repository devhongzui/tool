let express = require("express");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
let swaggerJsDoc = require("swagger-jsdoc");

let path = require("path");

let fs = require("fs");

let app = express();
let swaggerUi = require("swagger-ui-express");

// CUSTOM: import .env file
require("dotenv").config();

let swaggerOptionsFile = fs.readFileSync(
  path.join(__dirname, "configs", "swagger-options.json"),
  "utf8"
);
let urlencodedOptionsFile = fs.readFileSync(
  path.join(__dirname, "configs", "url-options.json"),
  "utf8"
);
let corsOptionFile = fs.readFileSync(
  path.join(__dirname, "configs", "cors-options.json"),
  "utf8"
);

// CUSTOM: configs Swagger
let swaggerOptions = JSON.parse(swaggerOptionsFile);
let swaggerDoc = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// CUSTOM: config url
let urlencodedOptions = JSON.parse(urlencodedOptionsFile);
let handlers = express.urlencoded(urlencodedOptions);
app.use(handlers);

// CUSTOM: config CORS
let corsOption = JSON.parse(corsOptionFile);
let middleWare = cors(corsOption);

app.use(middleWare);

let indexRouter = require(path.join(__dirname, "routes", "index"));
let randomStringRouter = require(path.join(
  __dirname,
  "routes",
  "api",
  "random-string.js"
));
let minifyRouter = require(path.join(
  __dirname,
  "routes",
  "api",
  "minify-js.js"
));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/random-string", randomStringRouter);
app.use("/api/minify-js", minifyRouter);

// catch 404 and forward to error handler
app.use((_, res) => {
  res.status(404).json({ message: "Page Not Found!" });
});

// error handler
app.use((err, _, res, __) => {
  let isDebugMode = process.env.APP_DEBUG === "true";

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isDebugMode ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    message: isDebugMode ? res.locals.message : "Server Interal Error!",
  });
});

module.exports = app;
