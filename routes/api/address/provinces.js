import { Router } from "express";
import {
  fulltextSearch,
  show,
} from "../../../controllers/api/address/provinces.js";

let AddressProvincesRouter = Router();

AddressProvincesRouter.get("/", show);

AddressProvincesRouter.get("/:search_query", fulltextSearch);

export default AddressProvincesRouter;
