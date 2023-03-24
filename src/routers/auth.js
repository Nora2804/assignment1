import express from "express";
import { signup } from "../controllers/auth";
import router from "./product";

const routers = express.Router();

router.post("/signup", signup);
export default router;