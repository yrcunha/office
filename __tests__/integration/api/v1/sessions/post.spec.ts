import { BaseUrl, waitForAllServices } from "../../../../orchestrator";
import { HttpCodes } from "../../../../../src/shared/lib/http/http";
import { faker } from "@faker-js/faker";
import { query } from "../../../../../src/features/services/datasource/database";
import { ulid } from "ulid";
import { verify } from "jsonwebtoken";

beforeAll(async () => await waitForAllServices());

describe("POST /api/v1/sessions", () => {
  describe("Anonymous user", () => {
    test("Creating user session", async () => {
      const result = await query(
        `
          INSERT INTO users (id, name, social_name, document, password,
                             professional_code, email, phone)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING
            id,
            document,
            password;
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
      const response = await fetch(`${BaseUrl}/v1/sessions`, {
        method: "POST",
        body: JSON.stringify({
          user: result.rows[0].document,
          password: result.rows[0].password,
        }),
      });
      expect(response.status).toBe(HttpCodes.OK);
      const responseJson = await response.json();
      expect(responseJson.auth).toBeTruthy();
      expect(
        verify(responseJson.token, process.env.JWT_PRIVATE_KEY!).sub,
      ).toEqual(result.rows[0].id);
    });
  });
});
