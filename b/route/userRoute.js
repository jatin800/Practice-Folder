import express from "express";
import { createUser, readAllUser, readUser } from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/read/:id",readUser);
router.get("/readall",readAllUser)

export default router;
