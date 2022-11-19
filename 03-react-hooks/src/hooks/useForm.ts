import { useState } from "react";

export const useForm = (initialForm: { [x: string]: any } = {}) => {
  const [formState, setFormState] = useState(initialForm);

  // const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  const onInputChange = ({ target }: any) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    // ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
