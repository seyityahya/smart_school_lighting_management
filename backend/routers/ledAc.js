const express = require("express");
const { ledAc } = require("../controllers/ledAc");

const router = express.Router();

router.put("/", ledAc);

module.exports = router;
