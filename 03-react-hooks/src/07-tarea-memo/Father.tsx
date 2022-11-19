import { Child } from "./Child";
import { useCallback, useState } from "react";

export const Father = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num: number) => {
    setValor((oldValue) => oldValue + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Child key={n} number={n} increment={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
