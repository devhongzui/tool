let express = require("express");
let router = express.Router();
let randomString = require("../../controllers/api/random-string");

/**
 * @swagger
 *
 * /random-string:
 *     post:
 *       description: Trả về dữ liệu các chuỗi ký tự ngẫu nhiên
 *       parameters:
 *         - in: body
 *           name: options
 *           description: Tùy chọn chuỗi ký tự
 *           schema:
 *             type: object
 *             properties:
 *               string_count:
 *                 type: integer
 *                 default: 5
 *                 example: 10
 *                 description: Số lượng chuỗi kết quả
 *               string_length:
 *                 type: integer
 *                 default: 32
 *                 example: 20
 *                 description: Số lượng ký tự mỗi chuỗi
 *               string_start:
 *                 type: string
 *                 default:
 *                 example:
 *                 description: Tiền tố
 *               string_end:
 *                 type: string
 *                 default:
 *                 example:
 *                 description: Hậu tố
 *               string_readable:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *                 description: Loại bỏ các ký tự khó nhìn
 *               string_charset:
 *                 type: [string, array, object]
 *                 default: alphanumeric
 *                 example: alphanumeric
 *               string_capitalization:
 *                 type: string
 *                 default: null
 *                 example: null
 *                 description: Chuyển toàn bộ ký tự sang in hoa/in thường
 *               string_separator:
 *                 type: string
 *                 default: "\n"
 *                 example: null
 *                 description: Dấu phân cách giữa các chuỗi
 *       responses:
 *         200:
 *           description: Thành công
 *           schema:
 *             type: object
 *             properties:
 *               result:
 *                 type: string
 *                 description: Kết quả
 *                 example: MSnR0MhVJPQ2oJB7RDXXxipxHZ4uJL7v\n0paxWuWwWm0Ci2qpjM6JCTChmUN6mqkz\n2Crcr55AkjcWo1k4xLK0m2kRk2raQ7yZ\nc10UJeVFnb0j5zFHSQuouWpRyjA40gN5\nuxry6gsE89JN9HKptV3Fgmyoj9I3BV06
 */

router.post("/", randomString.show);

module.exports = router;
