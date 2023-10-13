import { generate } from "randomstring";

export let show = (_, args) => {
  try {
    let count = parseInt(args.count || 5);
    let length = parseInt(args.length || 32);
    let start = args.start || "";
    let end = args.end || "";
    let readable = args.readable || false;
    let charset = args.charset || "alphanumeric";
    let capitalization = args.capitalization || null;
    let separator = args.separator || "\n";

    if (charset.length === 0) charset = "alphanumeric";

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
