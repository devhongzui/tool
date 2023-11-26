const typeDefs = `
  input MinifyJsCompressOption{
    annotations: Boolean,
    arguments: Boolean,
    arrows: Boolean,
    assignments: Boolean,
    awaits: Boolean,
    booleans: Boolean,
    collapse_vars: Boolean,
    comparisons: Boolean,
    conditionals: Boolean,
    dead_code: Boolean,
    default_values: Boolean,
    directives: Boolean,
    drop_console: Boolean,
    drop_debugger: Boolean,
    evaluate: Boolean,
    expression: Boolean,
    functions: Boolean,
    global_defs: Boolean,
    hoist_exports: Boolean,
    hoist_funs: Boolean,
    hoist_props: Boolean,
    hoist_vars: Boolean,
    if_return: Boolean,
    imports: Boolean,
    inline: Int
    join_vars: Boolean,
    keep_fargs: Boolean,
    keep_infinity: Boolean,
    loops: Boolean,
    merge_vars: Boolean,
    module: Boolean,
    negate_iife: Boolean,
    objects: Boolean,
    passes: Int,
    properties: Boolean,
    pure_funcs: String,
    pure_getters: String,
    reduce_funcs: Boolean,
    reduce_vars: Boolean,
    rests: Boolean,
    sequences: Boolean,
    side_effects: Boolean,
    spreads: Boolean,
    strings: Boolean,
    switches: Boolean,
    templates: Boolean,
    top_retain: String,
    toplevel: Boolean,
    typeofs: Boolean,
    unsafe: Boolean,
    unsafe_comps: Boolean,
    unsafe_Function: Boolean,
    unsafe_math: Boolean,
    unsafe_proto: Boolean,
    unsafe_regexp: Boolean,
    unsafe_undefined: Boolean,
    unused: String,
    varify: Boolean,
    yields: Boolean,
  }

  input MinifyJsOutputOption{
    annotations: Boolean,
    ascii_only: Boolean,
    beautify: Boolean,
    braces: Boolean,
    comments: String,
    extendscript: Boolean,
    galio: Boolean,
    indent_level: Int
    indent_start: Int,
    inline_script: Boolean,
    keep_quoted_props: Boolean,
    max_line_len: Boolean,
    preamble: String,
    preserve_line: Boolean,
    quote_keys: Boolean,
    quote_style: MinifyJsOutputOptionQuoteStyle,
    semicolons: Boolean,
    shebang: Boolean,
    width: Int,
    wrap_iife: Boolean,
  }

  enum MinifyJsOutputOptionQuoteStyle{
    GZIP,
    SINGLE,
    DOUBLE,
    ORIGINAL,
  }

  input MinifyJsParseOption{
    bare_returns: Boolean,
    html5_comments: Boolean,
    module: Boolean,
    shebang: Boolean,
  }

  type Result{
    status: String
    message: String
    result: String
  }
  
  type Query{
    random_string(
      count: Int,
      length: Int,
      start: String,
      end: String,
      readable: Boolean,
      charset: [String],
      capitalization: String,
      separator: String): Result
    minify_js(
      code: String,
      annotations: Boolean,
      compress: MinifyJsCompressOption,
      expression: Boolean,
      ie: Boolean,
      keep_fargs: Boolean,
      keep_fnames: Boolean,
      mangle: Boolean,
      module: Boolean,
      nameCache: String,
      output: MinifyJsOutputOption,
      parse: MinifyJsParseOption,
      sourceMap: Boolean,
      toplevel: Boolean,
      v8: Boolean,
      warnings: Boolean,
      webkit: Boolean): Result
    encode_decode(
      isEncode: Boolean,
      algorithm: String,
      secret: String,
      key: String,
    ): Result
  }
`;

export default typeDefs;
