import { Router } from "express";
import { registerTeam } from "../controllers/registration.controller";

const router = Router();

router.post("/register", registerTeam);

export default router;
