import mongoose from "mongoose";

let Schema = new mongoose.Schema({
  name: String,
  code: Number,
  division_type: String,
  codename: String,
  phone_code: Number,
  districts: Array,
});

Schema.index({
  name: "text",
  division_type: "text",
  codename: "text",
});

let Province = mongoose.model("province", Schema);

export default Province;
