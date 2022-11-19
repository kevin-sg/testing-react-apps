import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@/auth";

export const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { authState } = useContext(AuthContext);

  return !authState?.logged ? children : <Navigate to="/marvel" />;
};
