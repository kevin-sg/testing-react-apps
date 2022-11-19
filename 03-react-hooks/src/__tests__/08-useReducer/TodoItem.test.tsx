import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoItem } from "@/08-useReducer";

describe("Test in <TodoItem/>", () => {
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the Todo pending completion", () => {
    const itemData = { id: 1, done: false, todo: "Test in TodoItem" };
    render(<TodoItem todo={itemData} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const liElement = screen.getByTestId("list-test");
    const spanElement = screen.getByTestId("span-test");

    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
    expect(liElement.className).toContain("list-group-item d-flex justify-content-between");
  });

  test("should show the Todo completed", () => {
    const todoItemData = { id: 2, done: true, todo: "Test in TodoItem" };
    render(<TodoItem todo={todoItemData} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const spanElement = screen.getByTestId("span-test");
    expect(spanElement.className).toContain("align-self-center text-decoration-line-through");
  });

  test("should call the onToggleTodo when clicked", async () => {
    const todoItemData = { id: 2, done: true, todo: "Test in TodoItem" };
    render(<TodoItem todo={todoItemData} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    await userEvent.click(screen.getByTestId("span-test"));

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todoItemData.id);
  });

  test("should call the onDeleteTodo", async () => {
    const todoItemData = { id: 3, done: true, todo: "Test in TodoItem" };
    render(<TodoItem todo={todoItemData} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    await userEvent.click(screen.getByTestId("on-button-click"));

    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todoItemData.id);
  });
});
