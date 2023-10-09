import { Router } from "express";
import { show } from "../../../controllers/api/address/subDistricts.js";

let AddressSubDistrictsRouter = Router();

AddressSubDistrictsRouter.get("/", show);

export default AddressSubDistrictsRouter;
