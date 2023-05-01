import express from "express";

const router = express.Router();
import { create, dersBaslama, dersBitme } from "../controllers/dersProgramı";

router.post("/", create);
router.get("/baslangic", dersBaslama);
router.get("/bitis", dersBitme);

export default router;
