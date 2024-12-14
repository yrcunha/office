import {
  BaseUrl,
  clearMigrationTable,
  runningMigrations,
  waitForAllServices,
} from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";

beforeAll(async () => {
  await waitForAllServices();
  await clearMigrationTable();
});

afterAll(async () => await runningMigrations());

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("For the first time", async () => {
        const response = await fetch(`${BaseUrl}/v1/migrations`, {
          method: "POST",
        });
        expect(response.status).toBe(HttpCodes.Created);
        const responseJson = await response.json();
        expect(Array.isArray(responseJson)).toBeTruthy();
        expect(responseJson.length).toBeGreaterThan(0);
      });

      test("For the second time", async () => {
        const response = await fetch(`${BaseUrl}/v1/migrations`, {
          method: "POST",
        });
        expect(response.status).toBe(HttpCodes.OK);
        const responseJson = await response.json();
        expect(Array.isArray(responseJson)).toBeTruthy();
        expect(responseJson.length).toEqual(0);
      });
    });
  });
});
