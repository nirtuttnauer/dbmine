// utils/db.js
import mysql from "mysql2/promise";

export const createConnection = async ({ host, user, password, database }) => {
  return mysql.createConnection({ host, user, password, database });
};