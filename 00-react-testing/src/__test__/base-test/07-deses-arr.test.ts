import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Test in 07-deses-arr", () => {
  test("retornaArreglo should return an array", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
  });
});
