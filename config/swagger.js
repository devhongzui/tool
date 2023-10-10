let SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Tài liệu API",
      version: "1.0.0",
      description:
        "Tiếp cận các công cụ hỗ trợ lập trình trong hệ thống devhongzui.com",
    },
    host: process.env.APP_API_HOST,
    basePath: "/api/",
    schemes: [process.env.APP_SCHEME],
  },
  apis: [
    "./routes/api/minify.js",
    "./routes/api/randomstring.js",
    "./routes/api/address/provinces.js",
    "./routes/api/address/districts.js",
    "./routes/api/address/subDistricts.js",
  ],
};

export default SwaggerOptions;
