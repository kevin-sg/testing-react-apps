import { screen, render } from "@testing-library/react";

import { HomePage, UserContext } from "@/09-useContext";

describe("Test in <HomePage/>", () => {
  test("should show component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByTestId("pre-test");
    expect(JSON.parse(preTag.innerHTML)).toBe(null);
  });

  test("should show component with the user", () => {
    const userData = { id: 1, name: "Test 1", email: "test@test.com" };

    render(
      <UserContext.Provider value={{ user: userData, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const preTag = screen.getByTestId("pre-test");
    expect(JSON.parse(preTag.innerHTML)).toEqual(userData);
  });
});
