import {
  clearMigrationTable,
  waitForAllServices,
} from "../../../../orchestrator";

beforeAll(async () => {
  await waitForAllServices();
  await clearMigrationTable();
});

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("For the first time", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "POST",
          },
        );
        expect(response.status).toBe(201);
        const responseJson = await response.json();
        expect(Array.isArray(responseJson)).toBeTruthy();
        expect(responseJson.length).toBeGreaterThan(0);
      });

      test("For the second time", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "POST",
          },
        );
        expect(response.status).toBe(200);
        const responseJson = await response.json();
        expect(Array.isArray(responseJson)).toBeTruthy();
        expect(responseJson.length).toBe(0);
      });
    });
  });
});
