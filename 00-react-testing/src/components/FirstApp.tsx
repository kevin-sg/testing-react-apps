import type { FC } from "react";

interface IFirstAppProps {
  title: string;
  subTitle?: string;
  name?: string;
}

export const FirstApp: FC<IFirstAppProps> = (props) => {
  const { title, subTitle = "Not subtitle", name = "kevin sg" } = props;
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};
