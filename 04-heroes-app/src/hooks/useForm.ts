import { useState, ChangeEvent } from "react";

interface IUseFormCustomHook {
  formState: { [x: string]: string };
  onInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = (initialForm = {}): IUseFormCustomHook => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const onResetForm = () => setFormState(initialForm);

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
