import { Router } from "express";
import {
  fulltextSearch,
  search,
  show,
} from "../../../controllers/api/address/provinces.js";

let AddressProvincesRouter = Router();

AddressProvincesRouter.get("/", show);

AddressProvincesRouter.get("/search", search);

AddressProvincesRouter.get("/fulltextsearch/:search_query", fulltextSearch);

export default AddressProvincesRouter;
