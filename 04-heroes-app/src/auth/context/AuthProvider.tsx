import { FC, PropsWithChildren, useMemo, useReducer } from "react";

import { AuthContext, authReducer } from "./";
import { types } from "../types/types";

interface InitialState {
  logged: boolean;
  user: { id: string; name: string } | null;
}

const init = (): InitialState => {
  const user = JSON.parse(localStorage.getItem("user") as any);
  return { logged: !!user, user };
};

const INITIAL_STATE: InitialState = { logged: false, user: null };

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const login = (name = "") => {
    console.log("login");
    const user = { id: "#Testid-123", name };
    const action = { type: types.login, payload: user };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    const action = { type: types.logout, payload: null };
    dispatch(action);
  };

  const values = useMemo(() => ({ authState, login, logout }), [authState]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
