import express from "express";
import requireDir from "require-dir";
import cors from "cors";
import "babel-polyfill";
import "./config";

import routes from "./src/routes";

const app = express();
app.use(express.json());
app.use(cors());

requireDir("./src/models");

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
