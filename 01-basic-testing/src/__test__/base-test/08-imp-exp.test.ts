import { getHeroeById, getHeroesByOwner } from "@/base-pruebas/08-imp-exp";

describe("Test in 08-imp-exp", () => {
  test("getHeroeById should return unique heroe by id", () => {
    const uid = 1;
    const heroes = getHeroeById(uid);
    expect(heroes).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById should return undefined", () => {
    const uid = 6;
    const heroes = getHeroeById(uid);
    expect(heroes).toBeFalsy();
  });

  test("getHeroesByOwner should return all DC heroes", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((h) => h.owner === owner));
  });

  test("getHeroesByOwner should return all Marvel heroes", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((h) => h.owner === owner));
  });
});
