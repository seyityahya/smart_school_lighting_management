const express = require("express");
const ledAc = require("./ledAc");

const router = express.Router();

router.use("/ledAc", ledAc);

module.exports = router;
