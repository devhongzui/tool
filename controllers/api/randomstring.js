import { generate } from "randomstring";

export function show(req, res) {
  try {
    let count = parseInt(req.query.string_count || 5);
    let length = parseInt(req.query.string_length || 32);
    let start = req.query.string_start || "";
    let end = req.query.string_end || "";
    let readable = req.query.string_readable || false;
    let charset = req.query.string_charset || "alphanumeric";
    let capitalization = req.query.string_capitalization || null;
    let separator = req.query.string_separator || "\n";

    let result = [];
    for (let index = 0; index < count; index++) {
      let middle = generate({
        length: length,
        readable: readable,
        charset: charset,
        capitalization: capitalization,
      });

      result.push(start + middle + end);
    }

    res.status(200).json({
      status: "successfully",
      message: "Create success!",
      result: result.join(separator),
    });
  } catch (error) {
    res.status(422).json({
      status: "failed",
      message: error.message,
      result: null,
    });
  }
}
