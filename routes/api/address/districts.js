import { Router } from "express";
import {
  fulltextSearch,
  show,
} from "../../../controllers/api/address/districts.js";

let AddressDistrictsRouter = Router();

AddressDistrictsRouter.get("/", show);

AddressDistrictsRouter.get("/:search_query", fulltextSearch);

export default AddressDistrictsRouter;
