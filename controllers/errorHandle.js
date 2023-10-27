let ErrorHandle = (err, _, res, __) => {
  let debugMode = process.env.APP_DEBUG === "true";

  // set locals, only providing error in development
  res.locals.status = err.status || 500;
  res.locals.message = debugMode ? err.message : "Server Internal Error!";
  res.locals.error = debugMode ? err : {};

  // render the error page
  res.status(res.locals.status).json({ message: res.locals.message });
};

export default ErrorHandle;
