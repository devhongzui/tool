import { Router } from "express";
import { show } from "../../controllers/api/randomstring.js";

let RandomStringRouter = Router();

RandomStringRouter.get("/", show);

export default RandomStringRouter;
