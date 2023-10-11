/**
 * @swagger
 *
 * /address/districts:
 *   get:
 *     description: Trả về dữ liệu Toàn bộ Quận/Huyện/Thị xã
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
 *                     "_id": "6520cd4afc899ae04a6fc440",
 *                     "name": "Quận Ba Đình",
 *                     "code": 1,
 *                     "division_type": "quận",
 *                     "codename": "quan_ba_dinh",
 *                     "province_code": 1,
 *                     "wards": [],
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

/**
 * @swagger
 *
 * /address/districts/search:
 *   get:
 *     description: Trả về dữ liệu Quận/Huyện/Thị xã tìm kiếm theo 1 hoặc nhiều cột
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
 *         description: Tìm theo Cột Loại vùng (huyện/thành phố/thị xã/quận)
 *         example: thành phố
 *         schema:
 *           type: string
 *       - in: query
 *         name: codename
 *         description: Tìm theo Cột Tiếng Việt không dấu
 *         example: thanh_tri
 *         schema:
 *           type: string
 *       - in: query
 *         name: province_code
 *         description: Tìm theo Cột Mã vùng Tỉnh/Thành phố
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
 *                     "_id": "6520cd4afc899ae04a6fc444",
 *                     "name": "Quận Cầu Giấy",
 *                     "code": 5,
 *                     "division_type": "quận",
 *                     "codename": "quan_cau_giay",
 *                     "province_code": 1,
 *                     "wards": [],
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

/**
 * @swagger
 *
 * /address/districts/fulltextsearch/{search_query}:
 *   get:
 *     description: Trả về dữ liệu Quận/Huyện/Thị xã tìm kiếm theo cột name, codename
 *     parameters:
 *       - in: path
 *         name: search_query
 *         description: Từ khóa tìm kiếm
 *         example: Thanh Trì
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
 *                     "_id": "6520cd4afc899ae04a6fc62d",
 *                     "name": "Huyện Lâm Hà",
 *                     "code": 676,
 *                     "division_type": "huyện",
 *                     "codename": "huyen_lam_ha",
 *                     "province_code": 68,
 *                     "wards": [],
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
