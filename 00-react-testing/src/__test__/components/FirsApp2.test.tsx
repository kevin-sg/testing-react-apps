import { render, screen } from "@testing-library/react";

import { FirstApp } from "../../components/FirstApp";

describe("Test in <FirstApp />", () => {
  const title = "Hello, I'm Toom";
  const subTitle = "This is subtitle";

  test("should do match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test(`should look at the message ${title}`, () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should look at the title in h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("should look at the subtitle send for props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
