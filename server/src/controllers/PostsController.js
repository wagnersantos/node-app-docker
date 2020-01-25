import PostModels from "../models/PostsModels";

export const getPosts = async (req, res) => {
  try {
    const results = await PostModels.getPostsDB();
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};

export const addPost = async (req, res) => {
  try {
    const { post } = req.body;
    await PostModels.addPostDB(post);
    res.status(200).json({ status: 200, post });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};

export const getVotes = async (req, res) => {
  try {
    const results = await PostModels.getVotesDB();
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { upvote, id } = req.body;
    await PostModels.updatePostDB({ upvote, id });
    res.status(200).json({ status: 200, upvote, id });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostModels.deletePostDB(id );
    res.status(200).json({ status: "success", message: "delete post." });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};

export const searchPost = async (req, res) => {
  try {
    const { q } = req.params;
    const results = await PostModels.searchPostDB(q);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};
