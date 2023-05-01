import express from "express";

const router = express.Router();
import { create, dersBaslama } from "../controllers/dersProgramı";

router.post("/", create);
router.get("/baslangic", dersBaslama);
// router.post("/bitis-gorevi");

export default router;
