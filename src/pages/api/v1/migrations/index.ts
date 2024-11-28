import { NextApiRequest, NextApiResponse } from "next";
import { runner } from "node-pg-migrate";
import { join } from "node:path";
import type { RunnerOption } from "node-pg-migrate/types";
import { getDatabaseClient } from "@/services/datasource/database";
import { ErrorForHttpMethodNotAllowed } from "@/commons/errors/error-for-http-method-not-allowed";
import { Client } from "pg";
import { UnknownError } from "@/commons/errors/unknown error";
import { HttpCodes } from "@/commons/http/http";

export default async function migrations(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const allowMethods = ["GET", "POST"].includes(request.method!);
  if (!allowMethods) {
    return response
      .status(HttpCodes.MethodNotAllowed)
      .json(
        new ErrorForHttpMethodNotAllowed(
          `${request.method} method not allowed for migration calls`,
        ),
      );
  }

  let databaseClient: Client;
  try {
    databaseClient = await getDatabaseClient();
    const defaultMigrationOptions: RunnerOption = {
      databaseUrl: process.env.DATABASE_URL!,
      dryRun: true,
      dir: join(process.cwd(), "src", "services", "datasource", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === "GET") {
      const pendingMigrations = await runner(defaultMigrationOptions);
      return response.status(HttpCodes.OK).json(pendingMigrations);
    }

    const migratedMigrations = await runner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    if (migratedMigrations.length > 0) {
      return response.status(HttpCodes.Created).json(migratedMigrations);
    }

    return response.status(HttpCodes.OK).json(migratedMigrations);
  } catch (error) {
    return response
      .status(HttpCodes.InternalServerError)
      .json(new UnknownError(`Unknown error in migrations flow: ${error}`));
  } finally {
    await databaseClient!.end();
  }
}
