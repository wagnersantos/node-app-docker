import {
  getPostsDB,
  addPostDB,
  getVotesDB,
  updatePostDB,
  deletePostDB
} from "../models/PostsModels";

export const getPosts = (req, res) => {
  getPostsDB((error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
};

export const addPost = (req, res) => {
  const { post } = req.body;
  addPostDB({
    data: post,
    cb: error => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success", message: "post added." });
    }
  });
};

export const getVotes = (req, res) => {
  getVotesDB((error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const updatePost = (req, res) => {
  const { upvote, id } = req.body;
  updatePostDB({
    data: { upvote, id },
    cb: error => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success", message: "update post." });
    }
  });
};

export const deletePost = (req, res) => {
  const id = req.params.id;
  deletePostDB({
    id,
    cb: error => {
      if (error) {
        throw error
        res.status(500).json({ 
          status: "error",
            message: "Encountered an internal error when deleting an post."
        })
      }
      res.status(200).json({ status: "success", message: "delete post." });
    }
  });
};
