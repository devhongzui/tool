import { Router } from "express";
import {
  fulltextSearch,
  search,
  show,
} from "../../../controllers/api/address/districts.js";

let AddressDistrictsRouter = Router();

AddressDistrictsRouter.get("/", show);

AddressDistrictsRouter.get("/search", search);

AddressDistrictsRouter.get("fulltextsearch/:search_query", fulltextSearch);

export default AddressDistrictsRouter;
