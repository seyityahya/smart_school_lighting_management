import express from "express";

const router = express.Router();
import {
  create,
  get,
  getList,
  update,
  allUpdate,
} from "../controllers/sinifDurum";

router.post("/sinifUpload", create);
router.put("/allUpdate", allUpdate);
router.get("/", getList);
router.get("/:sinif_id", get);
router.put("/:sinif_id", update);

export default router;
