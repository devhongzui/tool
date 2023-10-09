import mongoose from "mongoose";

let SubDistrict = mongoose.model(
  "sub_district",
  new mongoose.Schema({
    name: String,
    code: Number,
    division_type: String,
    codename: String,
    district_code: Number,
  })
);

export default SubDistrict;
