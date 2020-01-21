import {
  getPostsDB,
  addPostDB,
  getVotesDB,
  updatePostDB
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
