import express from "express";

const router = express.Router();
import {
  create,
  dersBaslamaBitis,
  getList,
  Update,
  Delete,
} from "../controllers/dersProgramı";

router.post("/dersUploud", create);
router.get("/", getList);
router.get("/isikDegisimi", dersBaslamaBitis);
router.put("/:ders_id", Update);
router.delete("/:ders_id", Delete);

export default router;
