import { BaseUrl, waitForAllServices } from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";
import { query } from "../../../../../src/features/services/datasource/database";
import { faker } from "@faker-js/faker";
import { ulid } from "ulid";

beforeAll(async () => await waitForAllServices());

describe("GET /api/v1/users/{id}", () => {
  describe("User as a customer", () => {
    test("Retrieving a user", async () => {
      const result = await query(
        `
          INSERT INTO users (id, name, social_name, document, password,
                             professional_code, email, phone)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING
            id,
            name,
            social_name,
            document,
            password,
            professional_code,
            email,
            phone;
        `,
        [
          ulid(),
          faker.person.fullName(),
          faker.person.fullName(),
          faker.number
            .int({
              min: 10000000000,
              max: 99999999999,
            })
            .toString(),
          Math.random().toString(36).slice(-11),
          `${faker.number.int({ min: 1000, max: 200000 })}/BA`,
          faker.internet.email(),
          faker.phone.number(),
        ],
      );
      const response = await fetch(`${BaseUrl}/v1/users/${result!.rows[0].id}`);
      expect(response.status).toBe(HttpCodes.OK);

      const responseJson = await response.json();
      expect(responseJson).toEqual(result!.rows[0]);
    });
  });
});
