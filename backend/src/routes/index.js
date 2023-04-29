import { Router } from "express";

// helpers
// import { verifyAccessToken } from '../helpers/jwt';

// routes
import ledAc from "./ledAc";
import auth from "./auth";
import sinifDurum from "./sinifDurum";

const router = Router();

router.get("/", (req, res) => {
  res.end("hey");
});

router.use("/ledAc", ledAc);
router.use("/siniflar", sinifDurum);
router.use("/auth", auth);

export default router;
