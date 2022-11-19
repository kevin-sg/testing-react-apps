import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultipleCustomHooks } from "@/03-examples";
import { useCounterMock, useFetchMock } from "@/__mocks__";

jest.mock("@/hooks/useFetch");
jest.mock("@/hooks/useCounter");

describe("Test in <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounterMock.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: jest.fn(),
    reset: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks(); // reset mocks
  });

  test("should show the defult component", () => {
    useFetchMock.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByText(/BreakingBad/i)).toBeInTheDocument();

    const nextButton = screen.getByTestId("on-click-button");
    expect(nextButton.closest("button")?.disabled).toBeTruthy();
  });

  test("should show a Quote", () => {
    useFetchMock.mockReturnValue({
      data: [{ author: "Test", quote: "Hello world!" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByTestId("on-click-button");
    expect(nextButton.closest("button")?.disabled).toBeFalsy();
  });

  test("should call the increment function", async () => {
    useFetchMock.mockReturnValue({
      data: [{ author: "Test", quote: "Hello world!" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByTestId("on-click-button");
    await userEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
