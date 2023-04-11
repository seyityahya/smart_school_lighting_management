const express = require("express");
const { register, errorTest } = require("../controllers/register");

const router = express.Router();

router.post("/register", register);
router.get("/error", errorTest);

module.exports = router;
