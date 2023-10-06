exports.pageNotFound = (_, res) => {
  res.status(404).json({ message: "Page Not Found!" });
};

exports.errorHandle = (err, _, res, __) => {
  let isDebugMode = process.env.APP_DEBUG === "true";

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isDebugMode ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    message: isDebugMode ? res.locals.message : "Server Interal Error!",
  });
};
