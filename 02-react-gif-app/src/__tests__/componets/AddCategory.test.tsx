import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "@/components";

describe("Test in <AddCategory/>", () => {
  test("should change the value of text box", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const inputChange = screen.getByRole("textbox");
    fireEvent.input(inputChange, { target: { value: "Luffy" } });
    expect(inputChange.getAttribute("value")).toBe("Luffy");
  });

  test("should call onNewCategory if input have value", () => {
    const inputValue = "Goku";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.getAttribute("value")).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if input not empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
