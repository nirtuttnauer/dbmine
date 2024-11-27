// pages/api/db/[operation].js
import { createConnection } from "@/lib/db";

export default async function handler(req, res) {
  const { operation } = req.query;
  const { host, user, password, database, query } = req.body;

  try {
    const connection = await createConnection({ host, user, password, database });
    
    let result;
    if (operation === "read") {
      [result] = await connection.execute(query);
    } else {
      result = await connection.query(query);
    }
    connection.end();

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}