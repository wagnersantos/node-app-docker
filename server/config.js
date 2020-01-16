import dotenv from "dotenv";

dotenv.config();

const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

export const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
});

pool.query(
  `CREATE TABLE IF NOT EXISTS posts ( 
    ID SERIAL PRIMARY KEY, 
    post VARCHAR(255) NOT NULL, 
    upvote INTEGER)
  `
).catch(err => console.log(err));