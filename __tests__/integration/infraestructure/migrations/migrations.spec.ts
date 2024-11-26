import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

test("dry run", async () => {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL!,
    dryRun: true,
    dir: join("__infrastructure__", "migrations"),
    direction: "up",
    migrationsTable: "pgmigrations",
  });

  expect(migrations).toEqual([]);
});

test("live run", async () => {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL!,
    dryRun: false,
    dir: join("__infrastructure__", "migrations"),
    direction: "up",
    migrationsTable: "pgmigrations",
  });
  expect(migrations).toEqual([]);
});
