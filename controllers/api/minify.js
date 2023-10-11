import { minify } from "uglify-js";

export let show = (_, args) => {
  try {
    let code = args.code || "";
    let annotations = args.annotations || false;
    let compress = args.compress || {};
    let expression = args.expression || false;
    let ie = args.ie || false;
    let keep_fargs = args.keep_fargs || false;
    let keep_fnames = args.keep_fnames || false;
    let mangle = args.mangle || true;
    let module = args.module || false;
    let nameCache = args.nameCache || null;
    let output = args.output || null;
    let parse = args.parse || {};
    let sourceMap = args.sourceMap || false;
    let toplevel = args.toplevel || false;
    let v8 = args.v8 || false;
    let warnings = args.warnings || false;
    let webkit = args.webkit || false;

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
      let error = result.error;
      let message = `${error.message} (Line: ${error.line}, Column: ${error.col}, Position: ${error.pos})`;

      throw new Error(message);
    }

    return {
      status: "successfully",
      message: "Optimization success!",
      result: result.code,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
      result: null,
    };
  }
};
