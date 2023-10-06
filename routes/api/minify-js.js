let express = require("express");
let router = express.Router();
let uglify = require("uglify-js");

router.post("/", (req, res) => {
  let json = getResult(req.body);

  res.status(200).json(json);
});

function getResult(body) {
  let code = body.code || "";
  let annotations = body.annotations || false;
  let compress = body.compress || {};
  let expression = body.expression || false;
  let ie = body.ie || false;
  let keep_fargs = body.keep_fargs || false;
  let keep_fnames = body.keep_fnames || false;
  let mangle = body.mangle || true;
  let module = body.module || false;
  let nameCache = body.nameCache || null;
  let output = body.output || null;
  let parse = body.parse || {};
  let sourceMap = body.sourceMap || false;
  let toplevel = body.toplevel || false;
  let v8 = body.v8 || false;
  let warnings = body.warnings || false;
  let webkit = body.webkit || false;

  let result = uglify.minify(code, {
    annotations: annotations,
    compress: compress,
    expression: expression,
    ie: ie,
    keep_fargs: keep_fargs,
    keep_fnames: keep_fnames,
    mangle: mangle,
    module: module,
    nameCache: nameCache,
    output: output,
    parse: parse,
    sourceMap: sourceMap,
    toplevel: toplevel,
    v8: v8,
    warnings: warnings,
    webkit: webkit,
  });

  return result.error
    ? {
        status: "failed",
        message: result.error,
      }
    : {
        status: "successfully",
        message: result.code,
      };
}

module.exports = router;
