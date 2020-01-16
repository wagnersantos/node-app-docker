import express from "express";
import bodyParser from "body-parser";
import requireDir from "require-dir";
import { json } from "./config";

// const cors = require("cors");
// //iniciando o app
// const app = express();
// app.use(express.json());
// app.use(cors());

// //rotas
// app.use("/api", require("./src/routes"));

// app.listen(3001);

// const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getPosts = (request, response) => {
  pool.query("SELECT * FROM posts", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addPost = (request, response) => {
  const { post } = request.body;

  pool.query("INSERT INTO posts (post) VALUES ($1)", [post], error => {
    if (error) {
      throw error;
    }
    response.status(201).json({ status: "success", message: "post added." });
  });
};

const getVotes = (request, response) => {
  pool.query("SELECT id as idpost, upvote FROM posts", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addVote = (request, response) => {
  const { upvote, idpost } = request.body;

  pool.query(
    "UPDATE posts SET upvote = $1 WHERE id = $2",
    [upvote, idpost],
    error => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: "success", message: "vote added." });
    }
  );
};

app
  .route("/posts")
  .get(getPosts)
  .post(addPost);

app
  .route("/votes")
  .get(getVotes)
  .post(addVote);

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
