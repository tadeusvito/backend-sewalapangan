import express from "express";
import {
  getUsers,
  getUserById,
  register,
  updateUser,
  deleteUser,
  login
} from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.post('/login', login);
router.post("/register", register);
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);
router.get("/token", refreshToken);

export default router;
