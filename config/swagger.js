let SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Tài liệu API",
      version: "1.0.0",
      description:
        "Tiếp cận các công cụ hỗ trợ lập trình trong hệ thống devhongzui.com",
      host: process.env.APP_HOST + ":" + process.env.APP_PORT,
      basePath: "/api/",
      schemes: ["https"],
    },
  },
  apis: [],
};

export default SwaggerOptions;
