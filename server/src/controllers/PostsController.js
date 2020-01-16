import {
  getPostsDB,
  addPostDB,
  getVotesDB,
  addVoteDB
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

export const addVote = (req, res) => {
  const { upvote, idpost } = req.body;
  addVoteDB({
    data: { upvote, idpost },
    cb: error => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success", message: "vote added." });
    }
  });
};
