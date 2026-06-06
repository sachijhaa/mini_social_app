const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const upload = require("../middleware/upload");

const {
    createPost,
    getPosts,
    likePost,
    commentPost
} = require("../controllers/postController");

router.post(
    "/",
    auth,
    upload.single("image"),
    createPost
);

router.post(
    "/:id/comment",
    auth,
    commentPost
);

router.get("/",getPosts);

router.put("/:id/like", auth, likePost);

module.exports = router;