#!/usr/bin/env node
import { exec } from "node:child_process";

function checkPostgres() {
  exec(
    "docker exec development_database pg_isready --host localhost",
    (_, stdout) => {
      if (stdout.search("accepting connections") === -1) {
        process.stdout.write(".");
        checkPostgres();
        return;
      }
      console.log("\n🟢 Postgres is now available to accept connections!\n\n");
    },
  );
}

(() => {
  process.stdout.write("🔴 Waiting for postgres to accept connections!");
  checkPostgres();
})();
