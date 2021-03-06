const express = require("express");
const path = require("path");
const {destroy,getSingleBlog, getAllBlogs, getAllNotices, getUpvoteBlog} = require('../controllers/postController')
const router = express.Router();
const isAuth = require("../middlewares/isAuth")

router.get("/singleBlog/:id", getSingleBlog)

router.get("/blog/vote/:id/:isUpvote", isAuth, getUpvoteBlog)
router.get("/blog", getAllBlogs);

router.get("/singleBlog/destroy/:id",isAuth,destroy);// post id as params 

router.get("/notice", getAllNotices);

module.exports = router;
