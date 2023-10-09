import { Router } from "express";
import { show } from "../../../controllers/api/address/provinces.js";

let AddressProvincesRouter = Router();

AddressProvincesRouter.get("/", show);

export default AddressProvincesRouter;
