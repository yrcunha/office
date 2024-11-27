#!/usr/bin/env node
const { exec } = require("node:child_process");

function handler(error, stdout) {
  if (stdout.search("accepting connections") === -1) {
    process.stdout.write(".");
    check();
    return;
  }
  console.log("\n🟢 Postgres is now available to accept connections!");
}

function check() {
  exec("docker exec development_database pg_isready --host localhost", handler);
}

(() => {
  process.stdout.write("\n🔴 Waiting for postgres to accept connections!");
  check();
})();
