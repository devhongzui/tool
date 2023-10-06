let express = require("express");
let router = express.Router();
let randomString = require("../../controllers/api/random-string");

router.post("/", randomString.show);

module.exports = router;
