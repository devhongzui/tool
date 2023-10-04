let express = require("express");
let router = express.Router();
let randomstring = require("randomstring");

router.post("/", (req, res) => {
  let body = req.body;

  res.status(200).json({ result: getResult(body) });
});

function getResult(body) {
  let result = [];

  let count = parseInt(body.count || 5);
  let start = body.start || "";
  let end = body.end || "";
  let length = body.length || 32;
  let readable = body.readable || false;
  let charset = body.charset || "alphanumeric";
  let capitalization = body.capitalization || null;
  let separator = body.separator || "\n";

  for (let index = 0; index < count; index++) {
    let middle = randomstring.generate({
      lengt: length,
      readable: readable,
      charset: charset,
      capitalization: capitalization,
    });

    result.push(start + middle + end);
  }

  return result.join(separator);
}

module.exports = router;
