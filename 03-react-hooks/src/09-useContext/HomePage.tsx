import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>{" "}
      </h1>
      <hr />

      <pre data-testid="pre-test">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
