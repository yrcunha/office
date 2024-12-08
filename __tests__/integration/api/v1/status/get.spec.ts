import { waitForAllServices } from "../../../../orchestrator";

beforeAll(async () => await waitForAllServices());

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);
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
