import { Router } from "express";
import { show } from "../../controllers/api/randomstring.js";

let RandomStringRouter = Router();

/**
 * @swagger
 *
 * /random-string:
 *     get:
 *       description: Trả về dữ liệu các chuỗi ký tự ngẫu nhiên
 *       parameters:
 *         - in: query
 *           name: string_count
 *           description: Số lượng chuỗi kết quả
 *           default: 5
 *           example: 10
 *           schema:
 *             type: integer
 *         - in: query
 *           name: string_length
 *           description: Số lượng ký tự mỗi chuỗi
 *           default: 32
 *           example: 20
 *           schema:
 *             type: integer
 *         - in: query
 *           name: string_start
 *           description: Tiền tố
 *           default: ""
 *           example: start
 *           schema:
 *             type: string
 *         - in: query
 *           name: string_end
 *           description: Hậu tố
 *           default: ""
 *           example: end
 *           schema:
 *             type: string
 *         - in: query
 *           name: string_readable
 *           description: Loại bỏ các ký tự khó nhìn
 *           default: false
 *           example: true
 *           schema:
 *             type: boolean
 *         - in: query
 *           name: string_charset
 *           description: Ký tự xuất hiện trong chuỗi (alphanumeric - [0-9 a-z A-Z], alphabetic - [a-z A-Z], numeric - [0-9], hex - [0-9 a-f], binary - [01], octal - [0-7], custom, [])
 *           default: alphanumeric
 *           example: numeric
 *           schema:
 *             type: [string, array, null]
 *         - in: query
 *           name: string_capitalization
 *           description: Chuyển toàn bộ ký tự sang in hoa/in thường (lowercase/uppercase)
 *           default: null
 *           example: lowercase
 *           schema:
 *             type: string
 *         - in: query
 *           name: string_separator
 *           description: Dấu phân cách giữa các chuỗi
 *           default: \n
 *           example: ----
 *           schema:
 *             type: string
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
 *                 example: Create success!
 *               result:
 *                 type: string
 *                 description: Kết quả
 *                 example: yPJLU3Wmq5Si9jK6J5wD5aPdGunSgBE1\\n39kqB378jrNfGFp1wXTisETz9ufd87mA\\nGRhqWzDqSJ2twPktLixX3hXri7KG8SMk\\nmezrXqRwggJo4kmm46RE9RA15UahX9h4\\nb25MCZpF1XxSKESJuVtmd7vqSArdAoa3
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
 *                 type: string
 *                 description: Thông báo
 *                 example: ""
 *               result:
 *                 type: string
 *                 description: Kết quả
 *                 example: null
 */

RandomStringRouter.get("/", show);

export default RandomStringRouter;
