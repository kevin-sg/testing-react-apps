import type { FC, FormEvent } from "react";
import { useForm } from "../hooks/useForm";

interface ITodoData {
  id: number;
  done: boolean;
  description: string;
}
interface ITodoAddProps {
  onNewTodo: (data: ITodoData) => void;
}

export const TodoAdd: FC<ITodoAddProps> = ({ onNewTodo }) => {
  const {
    formState: { description },
    onInputChange,
    onResetForm,
  } = useForm({
    description: "",
  });

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
