import { getImagen } from "@/base-pruebas/11-async-await";

describe("Test in 11-async-await", () => {
  test("getImagen should return image URL", async () => {
    const imageUrl = await getImagen();

    expect(typeof imageUrl).toBe("string");
    expect(imageUrl.includes("https://")).toBe(true);
  });
});
