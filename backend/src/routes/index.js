import { Router } from "express";

// helpers
// import { verifyAccessToken } from '../helpers/jwt';

// routes
import ledAc from "./ledAc";
import auth from "./auth";

const router = Router();

router.get("/", (req, res) => {
  res.end("hey");
});

router.use("/ledAc", ledAc);
router.use("/auth", auth);

export default router;
