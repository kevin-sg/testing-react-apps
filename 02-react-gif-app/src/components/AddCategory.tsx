import { ChangeEvent, FC, FormEvent, useState } from "react";

interface IAddCategoryProps {
  onNewCategory: (value: string) => void;
}

export const AddCategory: FC<IAddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue.trim().length) return;

    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};
