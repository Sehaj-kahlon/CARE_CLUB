import express from "express";
import { registerIn, login, logout , registerN} from "../controllers/auth.js";

const router = express.Router();

router.post("/registerIn", registerIn);
router.post("/registerN", registerN);
router.post("/login", login);
router.post("/logout", logout);

export default router;
