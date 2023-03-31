const express = require("express");
const ledAc = require("./ledAc");
const auth = require("./auth");

const router = express.Router();

router.use("/ledAc", ledAc);
router.use("/auth", auth);

module.exports = router;
