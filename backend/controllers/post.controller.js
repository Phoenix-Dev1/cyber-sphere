import Post from "../lib/models/post.model.js";
import User from "../lib/models/user.model.js";

// Get all posts from collection
export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

// Get a single post from collection
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

// Create a new post in the collection
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json("User not found");
  }

  const newPost = new Post({ user: user._id, ...req.body });

  const post = await newPost.save();
  res.status(200).json(post);
};

// Delete a single post from collection
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  // Check if the post is deleted properly
  if (!deletedPost) {
    return res.status(403).json("Not your post to delete");
  }

  res.status(200).json("Post has been deleted");
};
