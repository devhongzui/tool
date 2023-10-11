import { generate } from "randomstring";

export let show = (_, args) => {
  try {
    let count = parseInt(args.string_count || 5);
    let length = parseInt(args.string_length || 32);
    let start = args.string_start || "";
    let end = args.string_end || "";
    let readable = args.string_readable || false;
    let charset = args.string_charset || "alphanumeric";
    let capitalization = args.string_capitalization || null;
    let separator = args.string_separator || "\n";

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

    return {
      status: "successfully",
      message: "Create success!",
      result: result.join(separator),
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
      result: null,
    };
  }
};
