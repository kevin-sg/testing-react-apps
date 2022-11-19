import { FC, useState } from "react";

export const CounterApp: FC<{ value: number }> = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter((c) => c + 1);
  const handleSubstract = () => setCounter((c) => c - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button type="button" onClick={handleAdd}>
        +1
      </button>
      <button type="button" onClick={handleSubstract}>
        -1
      </button>
      <button type="button" aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
