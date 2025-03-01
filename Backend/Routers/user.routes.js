import express from "express";
import {
	getInQueue,
	viewHospitals,
} from "../Controllers/User Controllers/user.controller.js";
import userProtectRoute from "../Middleware/userProtect.rout.js";
import { chat } from "../Controllers/Agent Controller/chat.js";

const router = express.Router();

router.get("/hospitals", viewHospitals);
router.post("/getInQueue", userProtectRoute, getInQueue);
router.post("/chat", chat);

export default router;
