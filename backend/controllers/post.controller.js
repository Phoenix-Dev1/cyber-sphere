import Post from "../lib/models/post.model.js";

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
  const newPost = new Post(req.body);

  const post = await newPost.save();
  res.status(200).json(post);
};

// Delete a single post from collection
export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  res.status(200).json("Post has been deleted");
};
