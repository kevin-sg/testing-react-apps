import type { FC } from "react";
import clsx from "clsx";

interface ITodoData {
  id: number;
  done: boolean;
  todo: string;
}
interface ITodoItemProps {
  todo: ITodoData;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li data-testid="list-test" className="list-group-item d-flex justify-content-between">
      <span
        data-testid="span-test"
        className={clsx("align-self-center", todo.done && "text-decoration-line-through")}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.todo}
      </span>
      <button data-testid="on-button-click" className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
