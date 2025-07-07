import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);

router.get("/profile", authenticate, getUserProfile);
router.put("/profile/update", authenticate, updateUserProfile);

// Admin
router.get("/users-list", authenticate, authorizeAdmin, getAllUsers);
router.delete("/delete/:id", authenticate, authorizeAdmin, deleteUser);

export default router;
