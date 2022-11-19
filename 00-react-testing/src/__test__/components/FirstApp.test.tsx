import { render } from "@testing-library/react";

import { FirstApp } from "../../components/FirstApp";

describe("Test in <FirstApp />", () => {
  test("should do match with snapshot", () => {
    const title = "Hello, I'm Apolo";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should look at the title in h1", () => {
    const title = "I'm Juan";
    const dataTest = "test-title";
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    // const h1 = container.querySelector("h1");

    // expect(getByTestId(dataTest)).toBeTruthy();
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId(dataTest).innerHTML).toContain(title);
  });

  test("should look at the subtitle sending for props", () => {
    const title = "I'm Juan";
    const subTitle = "I'm subtitle";
    const { container, getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);

    // expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
