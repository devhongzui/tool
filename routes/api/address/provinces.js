import { Router } from "express";
import {
  fulltextSearch,
  search,
  show,
} from "../../../controllers/api/address/provinces.js";

let AddressProvincesRouter = Router();

/**
 * @swagger
 *
 * /address/provinces:
 *   get:
 *     description: Trả về dữ liệu Toàn bộ Tỉnh/Thành phố
 *     responses:
 *       200:
 *         description: Thành công
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: successfully
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: Retrieve data successfully!
 *             result:
 *               type: array
 *               description: Kết quả
 *               example:
 *                 [
 *                   {
 *                     "_id": "6520cd16fc899ae04a6fc401",
 *                     "name": "Thành phố Hà Nội",
 *                     "code": 1,
 *                     "division_type": "thành phố trung ương",
 *                     "codename": "thanh_pho_ha_noi",
 *                     "phone_code": 24,
 *                     "districts": [],
 *                   },
 *                   ...,
 *                 ]
 *       422:
 *         description: Thất bại
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: failed
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: ""
 *             result:
 *               type: string
 *               description: Kết quả
 *               example: null
 */

AddressProvincesRouter.get("/", show);

/**
 * @swagger
 *
 * /address/provinces/search:
 *   get:
 *     description: Trả về dữ liệu Tỉnh/Thành phố tìm kiếm theo 1 hoặc nhiều cột
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Tìm theo Cột Tiếng Việt có dấu
 *         example: Hà Nội
 *         schema:
 *           type: string
 *       - in: query
 *         name: code
 *         description: Tìm theo Cột Mã vùng
 *         example: 2
 *         schema:
 *           type: integer
 *       - in: query
 *         name: division_type
 *         description: Tìm theo Cột Loại vùng (tỉnh/thành phố trung ương)
 *         example: thành phố
 *         schema:
 *           type: string
 *       - in: query
 *         name: codename
 *         description: Tìm theo Cột Tiếng Việt không dấu
 *         example: thanh_pho_ha_noi
 *         schema:
 *           type: string
 *       - in: query
 *         name: phone_code
 *         description: Tìm theo Cột Mã vùng số điện thoại
 *         example: 24
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: successfully
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: Retrieve data successfully!
 *             result:
 *               type: array
 *               description: Kết quả
 *               example:
 *                 [
 *                   {
 *                     "_id": "6520cd16fc899ae04a6fc402",
 *                     "name": "Tỉnh Hà Giang",
 *                     "code": 2,
 *                     "division_type": "tỉnh",
 *                     "codename": "tinh_ha_giang",
 *                     "phone_code": 219,
 *                     "districts": [],
 *                   },
 *                   ...,
 *                 ]
 *       422:
 *         description: Thất bại
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: failed
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: "Options cannot be empty!"
 *             result:
 *               type: string
 *               description: Kết quả
 *               example: null
 */

AddressProvincesRouter.get("/search", search);

/**
 * @swagger
 *
 * /address/provinces/fulltextsearch/{search_query}:
 *   get:
 *     description: Trả về dữ liệu Tỉnh/Thành phố tìm kiếm theo cột name, codename
 *     parameters:
 *       - in: path
 *         name: search_query
 *         description: Từ khóa tìm kiếm
 *         example: Hà Nội
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: successfully
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: Retrieve data successfully!
 *             result:
 *               type: array
 *               description: Kết quả
 *               example:
 *                 [
 *                   {
 *                     "_id": "6520cd16fc899ae04a6fc41c",
 *                     "name": "Tỉnh Hà Tĩnh",
 *                     "code": 42,
 *                     "division_type": "tỉnh",
 *                     "codename": "tinh_ha_tinh",
 *                     "phone_code": 239,
 *                     "districts": [],
 *                   },
 *                   ...,
 *                 ]
 *       422:
 *         description: Thất bại
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               description: Trạng thái
 *               example: failed
 *             message:
 *               type: string
 *               description: Thông báo
 *               example: ""
 *             result:
 *               type: string
 *               description: Kết quả
 *               example: null
 */

AddressProvincesRouter.get("/fulltextsearch/:search_query", fulltextSearch);

export default AddressProvincesRouter;
