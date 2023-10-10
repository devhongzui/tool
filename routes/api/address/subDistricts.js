import { Router } from "express";
import {
  fulltextSearch,
  search,
  show,
} from "../../../controllers/api/address/subDistricts.js";

let AddressSubDistrictsRouter = Router();

/**
 * @swagger
 *
 * /address/sub-districts:
 *   get:
 *     description: Trả về dữ liệu Toàn bộ Xã/Phường/Thị trấn
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
 *                     "_id": "6520cf32fc899ae04a6fc701",
 *                     "name": "Phường Phúc Xá",
 *                     "code": 1,
 *                     "division_type": "phường",
 *                     "codename": "phuong_phuc_xa",
 *                     "district_code": 1,
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

AddressSubDistrictsRouter.get("/", show);

/**
 * @swagger
 *
 * /address/sub-districts/search:
 *   get:
 *     description: Trả về dữ liệu Xã/Phường/Thị trấn tìm kiếm theo 1 hoặc nhiều cột
 *     parameters:
 *       - in: query
 *         name: name
 *         description: Tìm theo Cột Tiếng Việt có dấu
 *         example: Thanh Trì
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
 *         description: Tìm theo Cột Loại vùng (xã/thị trấn/phường)
 *         example: thị trấn
 *         schema:
 *           type: string
 *       - in: query
 *         name: codename
 *         description: Tìm theo Cột Tiếng Việt không dấu
 *         example: dong_my
 *         schema:
 *           type: string
 *       - in: query
 *         name: district_code
 *         description: Tìm theo Cột Mã vùng Quận/Huyện/Thị xã
 *         example: 2
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
 *                     "_id": "6520cf32fc899ae04a6fc701",
 *                     "name": "Phường Phúc Xá",
 *                     "code": 1,
 *                     "division_type": "phường",
 *                     "codename": "phuong_phuc_xa",
 *                     "district_code": 1,
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

AddressSubDistrictsRouter.get("/search", search);

/**
 * @swagger
 *
 * /address/sub-districts/fulltextsearch/{search_query}:
 *   get:
 *     description: Trả về dữ liệu Xã/Phường/Thị trấn tìm kiếm theo cột name, codename
 *     parameters:
 *       - in: path
 *         name: search_query
 *         description: Từ khóa tìm kiếm
 *         example: Đông Mỹ
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
 *                     "_id": "6520cf32fc899ae04a6fef73",
 *                     "name": "Xã An Mỹ",
 *                     "code": 31564,
 *                     "division_type": "xã",
 *                     "codename": "xa_an_my",
 *                     "district_code": 943,
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

AddressSubDistrictsRouter.get("/fulltextsearch/:search_query", fulltextSearch);

export default AddressSubDistrictsRouter;
