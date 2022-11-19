import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage: FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const lastPath = localStorage.getItem("lastPath") || "/";
  const onLogin = () => {
    login("User Test");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 data-testid="test-h1">Login</h1>
      <hr />

      <button data-testid="on-button-click" className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
