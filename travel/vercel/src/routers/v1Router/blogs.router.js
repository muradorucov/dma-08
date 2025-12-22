const express = require("express");
const authenticate = require("../../middleware/authenticate");

const blogRouter = express.Router();


// authenticate
blogRouter.get("/", getAllBlogs);
blogRouter.get("/for-admin", authenticate, getAllBlogsForAdmin);
blogRouter.get("/:id/for-admin", getSingleBlogForAdmin);
blogRouter.get("/:id", getSingleBlog);

blogRouter.post("/", createBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.patch("/:id", changeStatusBlog);
blogRouter.delete("/:id", deletBlog);


module.exports = blogRouter