import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "node_mysql_ts",
    connectionLimit: 10
  });
  return connection;
}
