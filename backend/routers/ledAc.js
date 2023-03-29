const express = require("express");
const { ledAc } = require("../controllers/ledAc");

const router = express.Router();

router.get("/", ledAc);

module.exports = router;
