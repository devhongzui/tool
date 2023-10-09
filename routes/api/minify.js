import { Router } from "express";
import { show } from "../../controllers/api/minify.js";

let MinifyRouter = Router();

MinifyRouter.post("/", show);

export default MinifyRouter;
