import { BaseUrl, waitForAllServices } from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";
import { faker } from "@faker-js/faker";

beforeAll(async () => await waitForAllServices());

describe("POST /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("Running user registration", async () => {
      const response = await fetch(`${BaseUrl}/v1/users`, {
        method: "POST",
        body: JSON.stringify({
          name: faker.person.fullName(),
          social_name: faker.person.fullName(),
          document: faker.number
            .int({
              min: 10000000000,
              max: 99999999999,
            })
            .toString(),
          professional_code: `${faker.number.int({ min: 1000, max: 200000 })}/BA`,
          email: faker.internet.email(),
          phone: faker.phone.number(),
        }),
      });
      expect(response.status).toBe(HttpCodes.Created);
      const responseJson = await response.json();
      expect(responseJson).toHaveProperty("id");
      expect(typeof responseJson.id).toEqual("string");
    });
  });
});
