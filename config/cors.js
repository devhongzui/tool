let CorsOptions = {
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "/example\\.com$/",
  ],
  optionsSuccessStatus: 200,
};

export default CorsOptions;
