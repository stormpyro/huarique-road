import { Router } from "express";
import MainRouter from "./routes/index";

const router = Router();

router.use("/", MainRouter);

// Health check
router.get("/health", (req, res) => {
  res.send("I am alive!");
});

// Bad Route
router.get("*", (req, res) => {
  res.end("Invallid Route");
});

export default router;
