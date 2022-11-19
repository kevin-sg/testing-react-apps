import { createContext, Dispatch, SetStateAction } from "react";

//  const [user, setUser] = useState();

interface IUserData {
  id: number;
  name: string;
  email: string;
}

interface IUserContext {
  user: IUserData | null;
  setUser: Dispatch<SetStateAction<IUserData>>;
}

export const UserContext = createContext({} as IUserContext);
