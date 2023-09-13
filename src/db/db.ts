import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { SQL_PASSWORD, SQL_USER, SQL_HOST, DB } = process.env;

const mySqlConnectionsPool = mysql.createPool({
  host: SQL_HOST,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: DB,
});

export const db = drizzle(mySqlConnectionsPool, { logger: true });
