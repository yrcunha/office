import { runner } from "node-pg-migrate";
import { join } from "node:path";
import type { RunnerOption } from "node-pg-migrate/types";
import { getDatabaseClient } from "@/features/services/datasource/database";
import { Client } from "pg";
import { UnknownError } from "@/shared/lib/errors/unknown.error";
import { HttpCodes } from "@/shared/lib/http/http";
import { NextResponse } from "next/server";

const defaultMigrationOptions: RunnerOption = Object.freeze({
  databaseUrl: process.env.DATABASE_URL!,
  dryRun: true,
  dir: join(
    process.cwd(),
    "src",
    "features",
    "services",
    "datasource",
    "migrations",
  ),
  direction: "up",
  verbose: true,
  migrationsTable: "pgmigrations",
});

export async function GET() {
  let databaseClient: Client;
  try {
    databaseClient = await getDatabaseClient();
    const pendingMigrations = await runner(defaultMigrationOptions);
    return NextResponse.json(pendingMigrations, { status: HttpCodes.OK });
  } catch (error) {
    return NextResponse.json(
      new UnknownError(`Unknown error in migrations flow: ${error}`),
      { status: HttpCodes.InternalServerError },
    );
  } finally {
    await databaseClient!.end();
  }
}

export async function POST() {
  let databaseClient: Client;
  try {
    databaseClient = await getDatabaseClient();
    const migratedMigrations = await runner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    if (migratedMigrations.length > 0) {
      return NextResponse.json(migratedMigrations, {
        status: HttpCodes.Created,
      });
    }

    return NextResponse.json(migratedMigrations, { status: HttpCodes.OK });
  } catch (error) {
    return NextResponse.json(
      new UnknownError(`Unknown error in migrations flow: ${error}`),
      { status: HttpCodes.InternalServerError },
    );
  } finally {
    await databaseClient!.end();
  }
}
