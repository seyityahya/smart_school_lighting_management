import express from "express";

const router = express.Router();
import { sinifDurumPost } from "../controllers/sinifDurum";

router.post("/", sinifDurumPost);

export default router;
