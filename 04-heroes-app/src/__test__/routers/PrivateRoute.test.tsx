import { MemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

import { AuthContext } from "@/auth";
import { PrivateRoute } from "@/router";

describe("Test in <PrivateRoute/>", () => {
  test("should navigate if is authenticated", () => {
    Storage.prototype.setItem = jest.fn(); // localStorage

    const contextValue = {
      authState: { logged: true, user: { id: "#TEST-456", name: "Test User" } },
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?=flash"]}>
          <PrivateRoute>
            <h1>Private Router</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByText(/Private/i)).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?=flash");
  });
});
