import { Client } from "pg";

export async function query(command: string, params: string[] = []) {
  let client: Client;
  try {
    client = await getDatabaseClient();
    return await client.query(command, params);
  } finally {
    await client!.end();
  }
}

export async function getDatabaseClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: process.env.NODE_ENV === "production",
  });
  await client.connect();
  return client;
}
