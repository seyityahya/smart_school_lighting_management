const express = require("express");
const { ledAc } = require("../controllers/ledAc");

const router = express.Router();

router.post("/", ledAc);

module.exports = router;
