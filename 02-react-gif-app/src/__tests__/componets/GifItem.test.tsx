import { render, screen } from "@testing-library/react";

import { GifItem } from "@/components";

const testData = {
  id: "1",
  title: "Luffy",
  url: "https://www.xtrafondos.com/wallpapers/vertical/monkey-d-luffy-de-one-piece-4017.jpg",
};

describe("Test in <GifItem/>", () => {
  test("should do math with snapshot", () => {
    const { container } = render(<GifItem id={testData.id} title={testData.title} url={testData.url} />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("should show the image URl and indicated ALT", () => {
    render(<GifItem id={testData.id} title={testData.title} url={testData.url} />);
    // screen.debug();
    const imageContainer = screen.getByRole("img", { name: testData.title + "-image" });
    // expect(imageContainer).toHaveAttribute("src", testData.url);
    // expect(imageContainer).toHaveAttribute("alt", testData.title + "-");
    expect(imageContainer.getAttribute("src")).toEqual(testData.url);
    expect(imageContainer.getAttribute("alt")).toEqual(testData.title);
  });

  test("should show title in component", () => {
    render(<GifItem id={testData.id} title={testData.title} url={testData.url} />);
    expect(screen.getByText(testData.title).innerHTML).toContain(testData.title);
  });
});
