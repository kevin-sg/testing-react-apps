import React from "react";

interface IChildProps {
  number: number;
  increment: (props: number) => void;
}

export const Child = React.memo<IChildProps>(({ number, increment }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
