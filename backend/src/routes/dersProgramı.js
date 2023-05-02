import express from "express";

const router = express.Router();
import { create, dersBaslamaBitis } from "../controllers/dersProgramı";

router.post("/", create);
router.get("/ısıkDegisimi", dersBaslamaBitis);
// router.get("/bitis", dersBitme);

export default router;
