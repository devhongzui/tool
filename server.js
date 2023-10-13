import "dotenv/config";
import "./config/db.js";
import express, { urlencoded } from "express";
import morgan from "morgan";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./config/graphql.js";
import cors from "cors";
import UrlOptions from "./config/urlEncoded.js";
import SwaggerDoc from "./routes/api-docs.js";
import swaggerUiExpress from "swagger-ui-express";
import NotFound from "./controllers/notFound.js";
import ErrorHandle from "./controllers/errorHandle.js";

let app = express();

// utilities
app.use(morgan("dev"));
app.use(cors());

// middle-wares
app.use(express.json());
app.use(urlencoded(UrlOptions));
app.use(express.static("./public"));

let path = {
  api: "/api",
  docs: "/docs",
};

// routes
app.use(path.api, express.json(), cors(), expressMiddleware(server));
app.use(path.docs, swaggerUiExpress.serve, swaggerUiExpress.setup(SwaggerDoc));
app.use(NotFound);
app.use(ErrorHandle);

let url = process.env.APP_URL;
let port = process.env.APP_PORT;

let db_username = process.env.DB_USERNAME;
let db_password = encodeURIComponent(process.env.DB_PASSWORD);
let db_host = process.env.DB_HOST;
let db_port = process.env.DB_PORT;
let db_database = process.env.DB_DATABASE;

class Row {
  constructor(service, address) {
    this.service = service;
    this.address = address;
  }
}

app.listen(port, () => {
  console.table([
    new Row("NodeJs", `http://${url}:${port}`),
    new Row(
      "MongoDB",
      `mongodb://${db_username}:${db_password}@${db_host}:${db_port}/${db_database}?authSource=admin`
    ),
    new Row("GraphQL", `http://${url}:${port}${path.api}`),
    new Row("Swageer", `http://${url}:${port}${path.docs}`),
  ]);
});
