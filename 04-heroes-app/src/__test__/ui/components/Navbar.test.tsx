import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "@/ui";
import { AuthContext } from "@/auth";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Test in <Navbar/>", () => {
  const mockLogout = jest.fn();

  const contextValue = {
    authState: { logged: true, user: { id: "#TEST-456", name: "Test User" } },
    login: jest.fn(),
    logout: mockLogout,
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show the name of user", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByTestId("test-username-span").textContent).toBeTruthy();
  });

  test("should call the logout and navigate when clicked the botton", async () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    await userEvent.click(screen.getByTestId("on-button-click"));

    expect(mockLogout).toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
