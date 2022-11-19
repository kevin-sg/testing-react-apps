import type { FC } from "react";

interface IGifItemProps {
  title: string;
  url: string;
  id: string;
}

export const GifItem: FC<IGifItemProps> = ({ title, url, id }) => {
  return (
    <div className="card">
      <img aria-label={title + "-image"} src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
