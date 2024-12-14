import { BaseUrl, waitForAllServices } from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";

beforeAll(async () => await waitForAllServices());

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch(`${BaseUrl}/v1/status`);
      expect(response.status).toBe(HttpCodes.OK);
      const responseJson = await response.json();
      expect(responseJson).toEqual({
        updated_at: new Date(responseJson.updated_at).toISOString(),
        dependencies: {
          database: {
            max_connections: 100,
            opened_connections: 1,
            version: "17.2",
          },
        },
      });
    });
  });
});
