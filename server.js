import "dotenv/config";
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
app.use("/", (_, res) => res.redirect("/api"));
app.use(NotFound);
app.use(ErrorHandle);

app.listen(process.env.APP_PORT, () => {
  console.log(`NodeJs: http://${process.env.APP_URL}:${process.env.APP_PORT}`);
});
