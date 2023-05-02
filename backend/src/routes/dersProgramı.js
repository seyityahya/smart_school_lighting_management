import express from "express";

const router = express.Router();
import { create, dersBaslamaBitis, getList } from "../controllers/dersProgramı";

router.post("/dersUploud", create);
router.get("/", getList);
router.get("/ısıkDegisimi", dersBaslamaBitis);

// router.get("/bitis", dersBitme);

export default router;
