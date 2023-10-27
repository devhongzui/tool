import mongoose from "mongoose";

let username = process.env.DB_USERNAME;
let password = encodeURIComponent(process.env.DB_PASSWORD);
let host = process.env.DB_HOST;
let port = process.env.DB_PORT;
let database = process.env.DB_DATABASE;

await mongoose.connect(
  `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
