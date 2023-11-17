import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import 'dotenv/config.js';

const { SQL_PASSWORD, SQL_USER, SQL_HOST, DB, MYSQLPORT } = process.env;

const mySqlConnectionsPool = mysql.createPool({
  host: SQL_HOST,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: DB,
  port: Number(MYSQLPORT),
});

export const db = drizzle(mySqlConnectionsPool, { logger: true });
