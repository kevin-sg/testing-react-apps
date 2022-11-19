import { getUser, getUserActive } from "../../base-pruebas/05-funciones";

describe("Test in 05-funcion", () => {
  test("should call getUser return an object of user", () => {
    const testUser = { uid: "ABC123", username: "apolo_swick" };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test("should call getUserActive return an object of user active", () => {
    const name = "apolo_swick";
    const user = getUserActive(name);
    expect(user).toEqual({ uid: "ABC567", username: name });
  });
});
