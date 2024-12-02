import {
  clearMigrationTable,
  waitForAllServices,
} from "../../../../orchestrator";

beforeAll(async () => {
  await waitForAllServices();
  await clearMigrationTable();
});

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations");
      expect(response.status).toBe(200);

      const responseJson = await response.json();
      expect(Array.isArray(responseJson)).toBeTruthy();
      expect(responseJson.length).toBeGreaterThan(0);
    });
  });
});
