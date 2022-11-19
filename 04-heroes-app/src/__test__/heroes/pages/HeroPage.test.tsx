import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { HeroPage } from "@/heroes";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Test in <HeroPage/>", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should navigate to the marvel page if can't find the hero", () => {
    const mockedQuery = "batman123";
    render(
      <MemoryRouter initialEntries={[`/hero/${mockedQuery}`]}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<h1>Marvel page</h1>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Marvel/i)).toBeTruthy();
  });

  test("should display hero description by query", () => {
    const mockedQuery = "dc-flash";

    render(
      <MemoryRouter initialEntries={[`/hero/${mockedQuery}`]}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<h1>Marvel page</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    const textElement = screen.getByTestId("test-hero-name");
    const imgElement = screen.getByTestId("test-img-hero").getAttribute("src");

    expect(textElement.textContent).toBeTruthy();
    expect(imgElement).toBe(`../src/assets/heroes/${mockedQuery}.jpg`);
  });

  test("should navigate back when clicked button", async () => {
    const mockedQuery = "marvel-spider";

    render(
      <MemoryRouter initialEntries={[`/hero/${mockedQuery}`]}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<h1>Marvel page</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    const buttonElement = screen.getByTestId("on-button-click");
    await userEvent.click(buttonElement);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });
});
