import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

import { AuthContext } from "@/auth";
import { AppRouter } from "@/router";

describe("Test in <AppRouter/>", () => {
  test("should show the login if not authenticated", () => {
    const contextValue = {
      authState: { logged: false, user: null },
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByTestId("test-h1").textContent).toBe("Login");
    expect(screen.getByTestId("on-button-click").textContent).toBe("Login");
  });

  test("should show the Mavel component if is authenticated ", () => {
    const contextValue = {
      authState: { logged: true, user: { id: "#TEST-456", name: "Test User" } },
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByTestId("test-navbar")).toBeTruthy();
    expect(screen.getByTestId("test-h1").textContent).toBe("Marvel Comics");
  });
});
