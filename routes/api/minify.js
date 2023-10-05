let express = require("express");
let router = express.Router();
let uglify = require("uglify-js");

router.post("/", (req, res) => {
  let body = req.body;

  res.status(200).json(getResult(body));
});

function getResult(body) {
  let code = body.string_code || "";
  let annotations = body.string_annotations || false;
  let compress = body.string_compress || {};
  let expression = body.string_expression || false;
  let ie = body.string_ie || false;
  let keep_fargs = body.string_keep_fargs || false;
  let keep_fnames = body.string_keep_fnames || false;
  let mangle = body.string_mangle || true;
  let module = body.string_module || false;
  let nameCache = body.string_nameCache || null;
  let output = body.string_output || null;
  let parse = body.string_parse || {};
  let sourceMap = body.string_sourceMap || false;
  let toplevel = body.string_toplevel || false;
  let v8 = body.string_v8 || false;
  let warnings = body.string_warnings || false;
  let webkit = body.string_webkit || false;

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

  let error = !!result.error;

  return {
    status: error ? "failed" : "successfully",
    message: error ? result.error : result.code,
  };
}

module.exports = router;
