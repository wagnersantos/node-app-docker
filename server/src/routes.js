import express from "express";
import {
  getPosts,
  addPost,
  getVotes,
  addVote
} from "./controllers/PostsController";

const routes = express.Router();

routes.get("/posts", getPosts);
routes.post("/posts", addPost);
// routes.put("/posts/:id", updatePost);
// routes.delete("/posts/:id", deletePost);

routes.get("/votes", getVotes);
routes.post("/votes", addVote);

export default routes;
