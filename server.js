import "dotenv/config";
import express, { urlencoded } from "express";
import e from "cors";
import CorsOptions from "./config/cors.js";
import morgan from "morgan";
import UrlOptions from "./config/urlEncoded.js";
import NotFound from "./routes/404.js";
import ErrorHandle from "./routes/500.js";
import RandomStringRouter from "./routes/api/randomstring.js";
import MinifyRouter from "./routes/api/minify.js";

let app = express();

// ultilities
app.use(morgan("dev"));
app.use(e(CorsOptions));

// middle-wares
app.use(express.json());
app.use(urlencoded(UrlOptions));
app.use(express.static("./public"));

// routes
app.use("/api/random-string", RandomStringRouter);
app.use("/api/minify-js", MinifyRouter);
app.use(NotFound);
app.use(ErrorHandle);

let url = process.env.APP_URL;
let port = process.env.APP_PORT;
app.listen(port, () =>
  console.log(`Node App running on IP: ${url} - Port: ${port}`)
);
