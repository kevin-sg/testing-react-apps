import { useEffect, useReducer } from "react";

import { todoReducer } from "@/08-useReducer/todoReducer";

interface InitialState {
  id: number;
  todo: string;
  done: boolean;
}

const init = (): InitialState[] => {
  return JSON.parse(localStorage.getItem("todos") as string) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo: {}) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,

    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
