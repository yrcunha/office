import retry from "async-retry";
import { ServiceUnavailabilityError } from "../src/commons/errors/service-unavailability.error";
import { query } from "../src/services/datasource/database";

export function waitForAllServices() {
  return retry(
    async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
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
