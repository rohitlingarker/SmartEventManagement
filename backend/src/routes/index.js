import { Router } from "express";
import authRoutes from "./auth.routes.js";
import eventRoutes from "./events.routes.js";
import teamRoutes from "./teams.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/events", eventRoutes);
router.use("/teams", teamRoutes);

export default router;
