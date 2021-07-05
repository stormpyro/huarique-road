import { Router } from "express";
import AuthController from "../../controllers/authController";

const router = Router();

router.post("/login", AuthController.login);
router.post("/sign-up", AuthController.signUp);
router.post("/logout", AuthController.logout);

export default router;
