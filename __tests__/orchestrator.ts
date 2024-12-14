import retry from "async-retry";
import { ServiceUnavailabilityError } from "../src/shared/lib/errors/service-unavailability.error";
import { query } from "../src/features/services/datasource/database";
import type { RunnerOption } from "node-pg-migrate";
import { runner } from "node-pg-migrate";
import { join } from "node:path";

export const BaseUrl = "http://localhost:3000/api";

export function waitForAllServices() {
  return retry(
    async () => {
      const response = await fetch(`${BaseUrl}/v1/status`);
      if (response.ok) return;
      throw new ServiceUnavailabilityError(
        "Services unavailable to start the test battery!",
      );
    },
    { retries: 100, maxTimeout: 1000 },
  );
}

export function clearMigrationTable() {
  return query(
    "drop table if exists pgmigrations; drop sequence if exists pgmigrations_id_seq;",
  );
}

export function runningMigrations() {
  const defaultMigrationOptions: RunnerOption = Object.freeze({
    databaseUrl: process.env.DATABASE_URL!,
    dryRun: false,
    dir: join(
      process.cwd(),
      "src",
      "features",
      "services",
      "datasource",
      "migrations",
    ),
    direction: "up",
    verbose: false,
    migrationsTable: "pgmigrations",
  });
  return runner(defaultMigrationOptions);
}
