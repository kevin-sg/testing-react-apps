import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "@/auth";
import { PublicRoute } from "@/router";

describe("Test in <PublicRoute/>", () => {
  test('should show the "children" if not authenticated', () => {
    const contextValue = {
      authState: { logged: false, user: null },
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <PublicRoute children={<h1>Login</h1>} />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByText(/Login/i)).toBeTruthy();
  });

  test("should navigate if is authenticated", () => {
    const contextValue = {
      authState: { logged: true, user: { id: "#TEST-123", name: "Test User" } },
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<PublicRoute children={<h1>Login</h1>} />} />
            <Route path="/marvel" element={<h1>Private route</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByText(/Private/i)).toBeTruthy();
  });
});
