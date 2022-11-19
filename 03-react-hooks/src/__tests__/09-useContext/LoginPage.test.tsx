import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginPage, UserContext } from "@/09-useContext";

describe("Test in <LoginPage/>", () => {
  test("should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByTestId("pre-test").innerHTML;
    expect(JSON.parse(preTag)).toBe(null);
  });

  test("should call the setUser when the button clicked", async () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    await userEvent.click(screen.getByTestId("button-click"));

    const userTest = { id: expect.any(Number), name: expect.any(String), email: expect.any(String) };

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(userTest);
  });
});
