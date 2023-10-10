import mongoose from "mongoose";

let Schema = new mongoose.Schema({
  name: String,
  code: Number,
  division_type: String,
  codename: String,
  district_code: Number,
});

Schema.index({
  name: "text",
  division_type: "text",
  codename: "text",
});

let SubDistrict = mongoose.model("sub_district", Schema);

export default SubDistrict;
