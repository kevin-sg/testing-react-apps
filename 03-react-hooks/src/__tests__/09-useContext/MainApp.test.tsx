import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from "@/09-useContext";

describe("Test in <MainApp/>", () => {
  test("should show compoment", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );
    expect(screen.getByText(/HomePage/i)).toBeTruthy();
  });

  test("should show compoment <LoginPage/>", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>,
    );
    const aElement = screen.getByTestId("Login-nav-link");

    expect(aElement.className).toContain("active");
    expect(screen.getByText(/LoginPage/i)).toBeTruthy();
  });
});
