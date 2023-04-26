import { Router } from "express";

// helpers
// import { verifyAccessToken } from '../helpers/jwt';

// routes
import auth from "./auth";

const router = Router();

router.get("/", (req, res) => {
  res.end("hey");
});

router.use("/auth", auth);

export default router;
