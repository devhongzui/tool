import "dotenv/config";
import "./config/db.js";
import express, { urlencoded } from "express";
import CorsOptions from "./config/cors.js";
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
app.use(cors(CorsOptions));

// middle-wares
app.use(express.json());
app.use(urlencoded(UrlOptions));
app.use(express.static("./public"));

// routes
app.use(
  "/graphql",
  cors(CorsOptions),
  express.json(),
  expressMiddleware(server)
);
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(SwaggerDoc)
);
app.use(NotFound);
app.use(ErrorHandle);

let url = process.env.APP_URL;
let port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Node App running on: http://${url}:${port}`);
  console.log(`GraphQL running on:  http://${url}:${port}/graphql `);
  console.log(`API Docs on:         http://${url}:${port}/api-docs `);
});
