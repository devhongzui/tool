import { Router } from "express";
import { show } from "../../../controllers/api/address/districts.js";

let AddressDistrictsRouter = Router();

AddressDistrictsRouter.get("/", show);

export default AddressDistrictsRouter;
