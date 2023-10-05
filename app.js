let path = require("path");
let express = require("express");
let cors = require("cors");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

require("dotenv").config();

let app = express();

let randomString = require("./routes/api/random-string.js");
let minify = require("./routes/api/minify.js");

app.use(logger("dev"));
app.use(cors({ origin: "/devhongzui.com$/" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/random-string", randomString);
app.use("/api/minify", minify);

module.exports = app;
