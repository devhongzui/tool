import { minify } from "uglify-js";

export function show(req, res) {
  let error_message;

  try {
    let code = req.body.code || "";
    let annotations = req.body.annotations || false;
    let compress = req.body.compress || {};
    let expression = req.body.expression || false;
    let ie = req.body.ie || false;
    let keep_fargs = req.body.keep_fargs || false;
    let keep_fnames = req.body.keep_fnames || false;
    let mangle = req.body.mangle || true;
    let module = req.body.module || false;
    let nameCache = req.body.nameCache || null;
    let output = req.body.output || null;
    let parse = req.body.parse || {};
    let sourceMap = req.body.sourceMap || false;
    let toplevel = req.body.toplevel || false;
    let v8 = req.body.v8 || false;
    let warnings = req.body.warnings || false;
    let webkit = req.body.webkit || false;

    let result = minify(code, {
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

    if (result.error) {
      error_message = result.error;
      throw new Error();
    }

    res.status(200).json({
      status: "successfully",
      message: "Optimization success!",
      result: result.code,
    });
  } catch (error) {
    res.status(422).json({
      status: "failed",
      message: error_message,
      result: null,
    });
  }
}
