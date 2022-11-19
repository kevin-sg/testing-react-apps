import { useLayoutEffect, useRef, useState, FC } from "react";

interface IQuoteProps {
  author: string;
  quote: string;
}

export const Quote: FC<IQuoteProps> = ({ author, quote }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (typeof pRef.current?.getBoundingClientRect === "function") {
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
    }
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
