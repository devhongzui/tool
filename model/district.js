import mongoose from "mongoose";

let Schema = new mongoose.Schema({
  name: String,
  code: Number,
  division_type: String,
  codename: String,
  province_code: Number,
  wards: Array,
});

Schema.index({
  name: "text",
  codename: "text",
});

let District = mongoose.model("district", Schema);

export default District;
