import dotenv from "dotenv";

dotenv.config();

const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const production =
  "postgres://etlwymluppaatp:347efbbe5f5b917ed93c310527e05ee48f5c2d43eb3d2e446768a484670025f6@ec2-174-129-33-139.compute-1.amazonaws.com:5432";

export const pool = new Pool({
  // connectionString: isProduction ? production : connectionString,
  connectionString: production,
  ssl: isProduction
});

pool
  .query(
    `CREATE TABLE IF NOT EXISTS posts ( 
    ID SERIAL PRIMARY KEY, 
    post VARCHAR(255) NOT NULL, 
    upvote INTEGER)
  `
  )
  .catch(err => console.log(err));
