import { NextApiRequest, NextApiResponse } from "next";
import { runner } from "node-pg-migrate";
import { join } from "node:path";
import type { RunnerOption } from "node-pg-migrate/types";
import * as process from "node:process";
import { getDatabaseClient } from "@/services/datasource/database";

export default async function migrations(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const databaseClient = await getDatabaseClient();
  const defaultMigrationOptions: RunnerOption = {
    databaseUrl: process.env.DATABASE_URL!,
    dryRun: true,
    dir: join("__infrastructure__", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await runner(defaultMigrationOptions);
    await databaseClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await runner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    await databaseClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }

  await databaseClient.end();
  return response.status(405).end();
}
