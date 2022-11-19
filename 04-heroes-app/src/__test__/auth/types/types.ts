import { types } from "@/auth";

describe('Test in "Types"', () => {
  test("should return this types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
