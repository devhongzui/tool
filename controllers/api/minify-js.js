let uglify = require("uglify-js");

exports.show = (req, res) => {
  let code = req.body.string_code || "";
  let annotations = req.body.string_annotations || false;
  let compress = req.body.string_compress || {};
  let expression = req.body.string_expression || false;
  let ie = req.body.string_ie || false;
  let keep_fargs = req.body.string_keep_fargs || false;
  let keep_fnames = req.body.string_keep_fnames || false;
  let mangle = req.body.string_mangle || true;
  let module = req.body.string_module || false;
  let nameCache = req.body.string_nameCache || null;
  let output = req.body.string_output || null;
  let parse = req.body.string_parse || {};
  let sourceMap = req.body.string_sourceMap || false;
  let toplevel = req.body.string_toplevel || false;
  let v8 = req.body.string_v8 || false;
  let warnings = req.body.string_warnings || false;
  let webkit = req.body.string_webkit || false;

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

  res.status(result.error ? 422 : 200).json(
    result.error
      ? {
          status: "failed",
          message: result.error,
        }
      : {
          status: "successfully",
          message: result.code,
        }
  );
};
