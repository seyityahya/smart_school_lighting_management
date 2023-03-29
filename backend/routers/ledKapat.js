const express = require("express");
const { ledKapat } = require("../controllers/ledKapat");

const router = express.Router();

router.get("/", ledKapat);

module.exports = router;
