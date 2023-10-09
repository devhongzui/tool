import mongoose from "mongoose";

let Province = mongoose.model(
  "province",
  new mongoose.Schema({
    name: String,
    code: Number,
    division_type: String,
    codename: String,
    phone_code: Number,
    districts: Array,
  })
);

export default Province;
