import { createContext } from "react";

interface InitiaState {
  logged: boolean;
  user: { id: string; name: string } | null;
}

interface IAuthContextProps {
  authState: InitiaState;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContextProps);
