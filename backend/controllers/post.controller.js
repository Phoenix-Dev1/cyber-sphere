import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// Get all posts from collection
export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await Post.find()
    .populate("user", "username") // for using the username field in the postlist
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;

  res.status(200).json({ posts, hasMore });
};

// Get a single post from collection
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "user",
    "username img" // for using the username and img fields in SinglePostPage route
  );
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

  // Creating a unique slug in the DB
  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

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

  if (!user) {
    return res.status(404).json("User not found");
  }

  // Find and delete the post
  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id, // Ensure the user is the owner of the post
  });

  // Check if the post is deleted properly
  if (!deletedPost) {
    return res.status(403).json("Not your post to delete");
  }

  // Remove the post ID from all users' savedPosts arrays
  await User.updateMany(
    { savedPosts: req.params.id },
    { $pull: { savedPosts: req.params.id } }
  );

  res.status(200).json("Post has been deleted");
};

// Define imagekit
const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

// Upload an image using Imagekit
export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
