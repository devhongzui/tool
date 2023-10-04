let createError = require("http-errors");
let path = require("path");
let express = require("express");
var cors = require("cors");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

require("dotenv").config();

let app = express();

let index = require("./routes/index");
let randomString = require("./routes/api/tools/random-string.js");
let minify = require("./routes/api/tools/minify.js");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors({ origin: "/devhongzui.com$/" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/api/tools/random-string", randomString);
app.use("/api/tools/minify", minify);

module.exports = app;
