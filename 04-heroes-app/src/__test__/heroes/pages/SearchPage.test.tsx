import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { SearchPage } from "@/heroes";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Test in <SearchPage/>", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should show correctly and return default values", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test("should show input value of the query", () => {
    const mockedQuery = "batman";
    render(
      <MemoryRouter initialEntries={[`/search?q=${mockedQuery}`]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const divElement = screen.getByTestId("test-alert");
    const inputElement = screen.getByTestId("test-input-value");
    const imgElement = screen.getByRole("img").getAttribute("src");

    expect(divElement.style.display).toBe("none");
    expect(divElement.className).toContain("alert");
    expect(inputElement.getAttribute("value")).toBe(mockedQuery);
    expect(imgElement).toContain("src/assets/heroes/dc-batman.jpg");
  });

  test("should show an error if the hero is not found (batman123)", () => {
    const mockedQuery = "batman123";
    render(
      <MemoryRouter initialEntries={[`/search?q=${mockedQuery}`]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const divElement = screen.getByTestId("test-alert");

    expect(divElement.style.display).toBeFalsy();
    expect(divElement.textContent).toBe(`No hero with ${mockedQuery}`);
  });

  test("should call navigate to the new screen", async () => {
    const mockedQuery = "flash";
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const inputElement = screen.getByTestId("test-input-value");
    const buttonElement = screen.getByTestId("on-submit-click");

    await userEvent.type(inputElement, mockedQuery);
    await userEvent.click(buttonElement);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${mockedQuery}`);
  });
});
