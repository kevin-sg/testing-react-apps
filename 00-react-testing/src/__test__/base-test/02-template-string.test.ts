import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Test in 02-template-string", () => {
  test("should getSaludo return a string", () => {
    const username = "kevin";
    const message = getSaludo(username);

    expect(message).toBe(`Hello ${username}`);
  });
});
