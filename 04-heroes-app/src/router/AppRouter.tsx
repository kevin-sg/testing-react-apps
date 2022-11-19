import { Route, Routes } from "react-router-dom";

import { LoginPage } from "@/auth";
import { HeroesRoutes } from "@/heroes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
