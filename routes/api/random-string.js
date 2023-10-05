let express = require("express");
let router = express.Router();
let randomString = require("randomstring");

router.post("/", (req, res) => {
  let body = req.body;

  res.status(200).json(getResult(body));
});

function getResult(body) {
  let result = [];

  let count = parseInt(body.string_count || 5);
  let start = body.string_start || "";
  let end = body.string_end || "";
  let length = body.string_length || 32;
  let readable = body.string_readable || false;
  let charset = body.string_charset || "alphanumeric";
  let capitalization = body.string_capitalization || null;
  let separator = body.string_separator || "\n";

  for (let index = 0; index < count; index++) {
    let middle = randomString.generate({
      lengt: length,
      readable: readable,
      charset: charset,
      capitalization: capitalization,
    });

    result.push(start + middle + end);
  }

  return {
    result: result.join(separator),
  };
}

module.exports = router;
