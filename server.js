import "dotenv/config";
import "./config/db.js";
import express, { urlencoded } from "express";
import morgan from "morgan";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./config/graphql.js";
import cors from "cors";
import UrlOptions from "./config/urlEncoded.js";
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

// routes
app.use("/api", express.json(), cors(), expressMiddleware(server));
app.use(NotFound);
app.use(ErrorHandle);

let nodejsPath = `http://${process.env.APP_URL}:${process.env.APP_PORT}`;
let mongodbPath = `mongodb://${process.env.DB_USERNAME}:*****@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`;

app.listen(process.env.APP_PORT, () => {
  console.log(`NodeJs: ${nodejsPath}`);
  console.log(`MongoDB: ${mongodbPath}`);
});
