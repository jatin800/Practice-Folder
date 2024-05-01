import express from "express";
import { createUser, readUser } from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/read/:id",readUser);

export default router;
