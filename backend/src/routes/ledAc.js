import express from "express";

const router = express.Router();
import { ledAc } from "../controllers/ledAc";

router.get("/", ledAc);

export default router;
