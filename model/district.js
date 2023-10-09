import mongoose from "mongoose";

let District = mongoose.model(
  "district",
  new mongoose.Schema({
    name: String,
    code: Number,
    division_type: String,
    codename: String,
    province_code: Number,
    wards: Array,
  })
);

export default District;
