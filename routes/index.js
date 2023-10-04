let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (_, res) =>
  res.status(200).json({ message: `Welcome to ${process.env.NAME}` })
);

module.exports = router;
