import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import {
  addBlog,
  addComment,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  togglePublish,
  getBlogComments,
  generateContent,
} from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.post("/add", auth, upload.single("image"), addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;
