import mongoose from "mongoose";

let connection = process.env.DB_CONNECTION;
let username = process.env.DB_USERNAME;
let password = encodeURIComponent(process.env.DB_PASSWORD);
let host = process.env.DB_HOST;
let port = process.env.DB_PORT;
let database = process.env.DB_DATABASE;

switch (connection) {
  case "mongodb":
    mongoose
      .connect(
        `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log(
          `Connected successfully to MongoDB on IP: ${host} - Port: ${port}`
        );
      })
      .catch((error) => {
        console.error("DB connection failed!");
        console.log(error);
        process.exit(0);
      });
    break;
  default:
    console.error(
      "DB_CONNECTION has not been declared or DB_CONNECTION is not supported"
    );
    process.exit(0);
}
