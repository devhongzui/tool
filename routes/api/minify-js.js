let express = require("express");
let router = express.Router();
let minifyJs = require("../../controllers/api/minify-js");

/**
 * @swagger
 *
 * paths:
 *   /minify-js:
 *     post:
 *       description: Trả về dữ liệu mã JavaScript đã tối ưu hóa
 *       parameters:
 *         - in: body
 *           name: options
 *           description: Tùy chọn tối ưu hóa
 *           schema:
 *             type: object
 *             properties:
 *               string_code:
 *                 type: string
 *                 default:
 *                 example: console.log('Hello World')
 *                 description: Mã JavaScript cần tối ưu hóa.
 *               string_annotations:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: pass false to ignore all comment annotations and elide them from output. Useful when, for instance, external tools incorrectly applied /*@__PURE__* / or /*#__PURE__* /. Pass true to both compress and retain comment annotations in output to allow for further processing downstream.
 *               string_compress:
 *                 type: object
 *                 default: {}
 *                 example: {}
 *                 description: pass false to skip compressing entirely. Pass an object to specify custom compress options.
 *               string_expression:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: parse as a single expression, e.g. JSON.
 *               string_ie:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: enable workarounds for Internet Explorer bugs.
 *               string_keep_fargs:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: pass true to prevent discarding or mangling of function arguments.
 *               string_keep_fnames:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: pass true to prevent discarding or mangling of function names. Useful for code relying on Function.prototype.name.
 *               string_mangle:
 *                 type: boolean
 *                 default: true
 *                 example: true
 *                 description: pass false to skip mangling names, or pass an object to specify mangle options (see below).
 *               string_module:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: set to true if you wish to process input as ES module, i.e. implicit "use strict"; and support for top-level await, alongside with toplevel enabled.
 *               string_nameCache:
 *                 type: string
 *                 default: null
 *                 example: null
 *                 description: pass an empty object {} or a previously used nameCache object if you wish to cache mangled variable and property names across multiple invocations of minify().
 *               string_output:
 *                 type: string
 *                 default: null
 *                 example: null
 *                 description: pass an object if you wish to specify additional output options. The defaults are optimized for best compression.
 *               string_parse:
 *                 type: object
 *                 default: {}
 *                 example: {}
 *                 description: pass an object if you wish to specify some additional parse options.
 *               string_sourceMap:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: pass an object if you wish to specify source map options.
 *               string_toplevel:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: set to true if you wish to enable top level variable and function name mangling and to drop unused variables and functions.
 *               string_v8:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: enable workarounds for Chrome & Node.js bugs.
 *               string_warnings:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: pass true to return compressor warnings in result.warnings. Use the value "verbose" for more detailed warnings.
 *               string_webkit:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: enable workarounds for Safari/WebKit bugs. PhantomJS users should set this option to true.
 *       responses:
 *         200:
 *           description: Thành công
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Trạng thái
 *                 example: successfully
 *               message:
 *                 type: string
 *                 description: Thông báo
 *                 example: console.log('Hello World')
 *         422:
 *           description: Thất bại
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Trạng thái
 *                 example: failed
 *               message:
 *                 type: object
 *                 description: Thông báo
 *                 example:
 *                   {
 *                     "message": "Unexpected token: name «World», expected: punc «;»",
 *                     "filename": "0",
 *                     "line": 1,
 *                     "col": 16,
 *                     "pos": 16,
 *                   }
 */

router.post("/", minifyJs.show);

module.exports = router;
