import { screen, render } from "@testing-library/react";

import { TodoApp } from "@/08-useReducer";
import { useTodoMock } from "@/__mocks__";

jest.mock("@/hooks/useTodos");

describe("Test in <TodoApp/>", () => {
  useTodoMock.mockReturnValue({
    todos: [
      { id: 1, todo: "#Todo 1", done: false },
      { id: 2, todo: "#Todo 2", done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });

  test("should show component correctly", () => {
    render(<TodoApp />);

    expect(screen.getByText(/Todo 1/i)).toBeTruthy();
    expect(screen.getByText(/Todo 2/i)).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
