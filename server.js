import "dotenv/config";
import "./config/db.js";
import express, { urlencoded } from "express";
import e from "cors";
import CorsOptions from "./config/cors.js";
import morgan from "morgan";
import UrlOptions from "./config/urlEncoded.js";
import SwaggerDoc from "./routes/api-docs.js";
import swaggerUiExpress from "swagger-ui-express";
import RandomStringRouter from "./routes/api/randomstring.js";
import MinifyRouter from "./routes/api/minify.js";
import AddressProvincesRouter from "./routes/api/address/provinces.js";
import AddressDistrictsRouter from "./routes/api/address/districts.js";
import AddressSubDistrictsRouter from "./routes/api/address/subDistricts.js";
import NotFound from "./routes/404.js";
import ErrorHandle from "./routes/500.js";

let app = express();

// utilities
app.use(morgan("dev"));
app.use(e(CorsOptions));

// middle-wares
app.use(express.json());
app.use(urlencoded(UrlOptions));
app.use(express.static("./public"));

// routes
app.use(
  "/api/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(SwaggerDoc)
);
app.use("/api/random-string", RandomStringRouter);
app.use("/api/minify-js", MinifyRouter);
app.use("/api/address/provinces", AddressProvincesRouter);
app.use("/api/address/districts", AddressDistrictsRouter);
app.use("/api/address/sub-districts", AddressSubDistrictsRouter);
app.use(NotFound);
app.use(ErrorHandle);

let url = process.env.APP_URL;
let port = process.env.APP_PORT;
app.listen(port, () =>
  console.log(`Node App running on IP: ${url} - Port: ${port}`)
);
