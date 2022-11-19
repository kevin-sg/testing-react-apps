// import { describe, expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

import { CounterApp } from "@/components";

describe("Test in <CounterApp/>", () => {
  const initialValue = 10;

  test("should do match with snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("should look at the initial value of 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test("should increment with button +1", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("+1"));
    // screen.debug();
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("should reset values with button reset", () => {
    render(<CounterApp value={355} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    // screen.debug();

    expect(screen.getByText(355)).toBeTruthy();
  });
});
