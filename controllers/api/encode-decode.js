import CryptoJS from "crypto-js";

export let show = (_, args) => {
  try {
    let result;

    let isEncode = args.isEncode || false;
    let algorithm = args.algorithm || "MD5";
    let secret = args.secret || "";
    let key = args.key || "";

    if (isEncode)
      result = checkHash(algorithm)
        ? CryptoJS[algorithm](secret).toString()
        : CryptoJS[algorithm].encrypt(secret, key).toString();
    else
      result = CryptoJS[algorithm]
        .decrypt(secret, key)
        .toString(CryptoJS["enc"].Utf8);

    return {
      status: "successfully",
      message: "Encryption/Decryption successful!",
      result: result,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
      result: null,
    };
  }
};

function checkHash(algorithm) {
  let isHash = false;

  let hashing = ["MD5", "SHA1", "SHA256", "SHA512", "SHA3", "RIPEMD160"];

  hashing.forEach((value) => {
    if (value === algorithm) isHash = true;
  });

  return isHash;
}
