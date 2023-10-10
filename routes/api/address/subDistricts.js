import { Router } from "express";
import {
  fulltextSearch,
  search,
  show,
} from "../../../controllers/api/address/subDistricts.js";

let AddressSubDistrictsRouter = Router();

AddressSubDistrictsRouter.get("/", show);

AddressSubDistrictsRouter.get("/search", search);

AddressSubDistrictsRouter.get("fulltextsearch/:search_query", fulltextSearch);

export default AddressSubDistrictsRouter;
