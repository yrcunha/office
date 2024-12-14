import { BaseUrl, waitForAllServices } from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";

beforeAll(async () => await waitForAllServices());

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch(`${BaseUrl}/v1/migrations`);
      expect(response.status).toBe(HttpCodes.OK);
      const responseJson = await response.json();
      expect(Array.isArray(responseJson)).toBeTruthy();
      expect(responseJson.length).toEqual(0);
    });
  });
});
