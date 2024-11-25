import { Client } from "pg";

export async function query(command: string, params: string[] = []) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  try {
    await client.connect();
    return await client.query(command, params);
  } catch (error) {
    console.error(`Erro na requisição do banco de dados: ${error}`);
    throw new Error("Erro de banco");
  } finally {
    await client.end();
  }
}
