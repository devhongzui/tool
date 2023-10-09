let SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Tài liệu API",
      version: "1.0.0",
      description:
        "Tiếp cận các công cụ hỗ trợ lập trình trong hệ thống devhongzui.com",
    },
    host: process.env.APP_URL + ":" + process.env.APP_PORT,
    basePath: "/api/",
    schemes: [process.env.APP_SCHEME],
  },
  apis: ["./routes/api/minify.js", "./routes/api/randomstring.js"],
};

export default SwaggerOptions;
