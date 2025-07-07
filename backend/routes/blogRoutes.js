import express from "express";
import {
  createBlogPost,
  getAllBlogPosts,
  getSingleBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from "../controllers/blogController.js";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/",authenticate, authorizeAdmin,createBlogPost);
router.get("/", getAllBlogPosts);
router.get("/:id", getSingleBlogPost);
router.put("/:id", authenticate, authorizeAdmin, updateBlogPost);
router.delete("/:id", authenticate, authorizeAdmin, deleteBlogPost);

export default router;
