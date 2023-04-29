import express from "express";

const router = express.Router();
import { create, get, getList, update } from "../controllers/sinifDurum";

router.post("/sinifUpload", create);
router.get("/:sinif_id", get);
router.get("/", getList);
router.put("/:sinif_id", update);

export default router;
