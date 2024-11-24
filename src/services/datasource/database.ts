import { Client } from "pg";

export async function query(action: string) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  const result = await client.query(action);
  await client.end();
  return result.rows[0];
}
