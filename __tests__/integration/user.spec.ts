import { ErrorForInvalidData } from "../../src/commons/errors/error-for-invalid-data";
import { createUser } from "../../src/models/user";

describe("Escopo de usuários", () => {
  test("deve criar usuário e salvar os dados em nossa base de dados e no provedor de identidade", () => {
    expect(
      createUser({
        email: "rui@gmail.com",
        name: "Rui Barbosa",
      }),
    ).toStrictEqual({
      email: "rui@gmail.com",
      name: "Rui Barbosa",
    });
  });

  test("deve retornar erro caso tenha problemas de validação nos dados de entrada", () => {
    expect(() =>
      createUser({
        email: "rui.com.br",
        name: "Rui Barbosa",
      }),
    ).toThrow(ErrorForInvalidData);
  });
});
