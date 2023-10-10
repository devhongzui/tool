import { Router } from "express";
import {
  fulltextSearch,
  show,
} from "../../../controllers/api/address/subDistricts.js";

let AddressSubDistrictsRouter = Router();

AddressSubDistrictsRouter.get("/", show);

AddressSubDistrictsRouter.get("/:search_query", fulltextSearch);

export default AddressSubDistrictsRouter;
