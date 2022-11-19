import { FC, PropsWithChildren, useMemo, useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com'
// }
interface IUserData {
  id: number;
  name: string;
  email: string;
}

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState({} as IUserData);

  const value = useMemo(() => ({ user, setUser }), []);

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
