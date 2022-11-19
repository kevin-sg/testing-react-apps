import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "@/auth";

export const Navbar: React.FC = () => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav data-testid="test-navbar" className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? "active" : ""}`} to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? "active" : ""}`} to="/dc">
            DC
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? "active" : ""}`} to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span data-testid="test-username-span" className="nav-item nav-link text-primary">
            {authState.user?.name}
          </span>

          <button data-testid="on-button-click" className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
