const express = require("express");
const ledKapat = require("./ledKapat");
const ledAc = require("./ledAc");

const router = express.Router();

router.use("/ledKapat", ledKapat);
router.use("/ledAc", ledAc);

module.exports = router;
