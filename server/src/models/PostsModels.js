import { pool } from "../../config";

export const getPostsDB = () => pool.query("SELECT * FROM posts")

export const addPostDB = ({ data, cb }) => {
  pool.query(`INSERT INTO posts (post, upvote) VALUES ('${data}',0)`, cb);
};

export const getVotesDB = cb =>
  pool.query("SELECT id as idpost, upvote FROM posts", cb);

export const updatePostDB = ({ data, cb }) => {
  pool.query(
    `UPDATE posts SET upvote = '${data.upvote}' WHERE id = '${data.id}'`,
    cb
  );
};

export const deletePostDB = ({ id, cb })  => 
  pool.query(`DELETE FROM posts WHERE id = ${id}`)


export const searchPostDB = ({ q, cb })  => {
  pool.query(`SELECT * FROM posts WHERE post SIMILAR TO '%${q}%'`, cb)
}