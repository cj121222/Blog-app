import asyncHandler from "../middleware/asyncHandler.js";
import Blog from "../models/blog.js";

const createBlogPost = asyncHandler(async (req, res) => {
  const { title, description, content, tags, image } = req.body;

  if (!title || !description || !content || !tags) {
    res.status(400);
    throw new Error("All required fields must be filled.");
  }

  const existingBlogPost = await Blog.findOne({ title });

  if (existingBlogPost) {
    return res.status(403).json({ message: "This Blog is already posted." });
  }

  const newBlog = await Blog.create({
    title,
    description,
    content,
    author: req.user._id,
    tags,
    image,
  });

  res.status(201).json(newBlog);
});

// Get all blog posts
const getAllBlogPosts = asyncHandler(async (req, res) => {
  const allBlogPosted = await Blog.find({});
  if (!allBlogPosted) {
    throw new Error("No blogs found.");
  }
  res.json(allBlogPosted);
});

// Get a single blog post
const getSingleBlogPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const specificBlog = await Blog.findById(id);
  res.json(specificBlog);
});

// Update a blog post
const updateBlogPost = asyncHandler(async (req, res) => { 
  const { title, description, content, tags, image } = req.body;
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {
      title,
      description,
      content,
      tags,
      image,
    },
    {
      new: true,
    }
  );
  res.json(updatedBlog);
});

// Delete a blog post
const deleteBlogPost = asyncHandler(async (req, res) => {
  const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Blog deleted successfully" });
});

export {
  createBlogPost,
  getAllBlogPosts,
  getSingleBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
