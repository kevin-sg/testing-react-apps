import { getHeroeByIdAsync } from "@/base-pruebas/09-promesas";

const hero = {
  id: 1,
  name: "Batman",
  owner: "DC",
};

describe("Test in 09-promises", () => {
  test("getHeroeByIdAsync should return an unique hero", async () => {
    const uid = 1;

    const getHero = await getHeroeByIdAsync(uid);
    expect(getHero).toEqual(hero);
  });

  test("getHeroeByIdAsync should return error", async () => {
    const uid = 100;

    try {
      await getHeroeByIdAsync(uid);
    } catch (err) {
      expect(err).toBe(`No se pudo encontrar el héroe ${uid}`);
    }
  });
});
