import type { FC } from "react";
import { TodoItem } from "./TodoItem";

interface ITodoData {
  id: number;
  done: boolean;
  todo: string;
}
interface ITodoListProps {
  todos: ITodoData[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList: FC<ITodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
