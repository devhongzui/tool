import { show as showRandomString } from "../../controllers/api/randomstring.js";
import { show as showMinifyJs } from "../../controllers/api/minify.js";
import { show as showEncodeDeCode } from "../../controllers/api/encode-decode.js";

let resolvers = {
  Query: {
    // Random String
    random_string: (parent, args) => showRandomString(parent, args),
    // Minify Js
    minify_js: (parent, args) => showMinifyJs(parent, args),
    // Encode Decode
    encode_decode: (parent, args) => showEncodeDeCode(parent, args),
  },
};

export default resolvers;
