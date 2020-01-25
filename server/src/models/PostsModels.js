import { pool } from "../../config";

export default {
  getPostsDB: () => pool.query("SELECT * FROM posts"),
  
  addPostDB: (post) => 
    pool.query(`INSERT INTO posts (post, upvote) VALUES ('${post}', 0)`),
  
  getVotesDB: cb =>
    pool.query("SELECT id as idpost, upvote FROM posts", cb),
  
  updatePostDB: ({ upvote, id }) => 
    pool.query(`UPDATE posts SET upvote = '${upvote}' WHERE id = '${id}'`),
  
  deletePostDB: (id, cb) =>
    pool.query(`DELETE FROM posts WHERE id = ${id}`, cb),
  
  searchPostDB: q =>
  pool.query(`SELECT * FROM posts WHERE post SIMILAR TO '%${q}%'`),
}
