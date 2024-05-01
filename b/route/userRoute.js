import express from "express";
import {
  createUser,
  deleteUser,
  readAllUser,
  readUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/read/:id", readUser);
router.get("/readall", readAllUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
