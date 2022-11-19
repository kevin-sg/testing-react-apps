import { authReducer } from "@/auth";
import { types } from "@/auth/types/types";

describe("Test in authReducer", () => {
  const INITIAL_STATE = { logged: false, user: null };

  test("should return default values", () => {
    const state = authReducer(INITIAL_STATE, { type: "", payload: null });

    expect(state.logged).toBeFalsy();
    expect(state).toEqual(INITIAL_STATE);
  });

  test("should call (login) and authenticated and set the user", () => {
    const userData = { id: "#1-Test", name: "Test User 1" };
    const action = { type: types.login, payload: userData };
    const state = authReducer(INITIAL_STATE, action);

    expect(state.logged).toBeTruthy();
    expect(state.user).toEqual(userData);
  });

  test("should (logout) delete the user and logged in false", () => {
    const action = { type: types.logout, payload: null };
    const state = authReducer(INITIAL_STATE, action);

    expect(state).toEqual(INITIAL_STATE);
  });
});
