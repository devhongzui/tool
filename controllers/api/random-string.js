let randomstring = require("randomstring");

exports.show = (req, res, _) => {
  let result = [];

  let count = parseInt(req.body.string_count || 5);
  let start = req.body.string_start || "";
  let end = req.body.string_end || "";
  let length = req.body.string_length || 32;
  let readable = req.body.string_readable || false;
  let charset = req.body.string_charset || "alphanumeric";
  let capitalization = req.body.string_capitalization || null;
  let separator = req.body.string_separator || "\n";

  for (let index = 0; index < count; index++) {
    let middle = randomstring.generate({
      lengt: length,
      readable: readable,
      charset: charset,
      capitalization: capitalization,
    });

    result.push(start + middle + end);
  }

  res.status(200).json({ result: result.join(separator) });
};
