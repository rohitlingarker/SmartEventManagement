import { Router } from "express";
import { matchTeams } from "../controllers/teams.controller.js";

const router = Router();

router.post("/match", matchTeams);

export default router;
