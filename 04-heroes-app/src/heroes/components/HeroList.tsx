import { useMemo } from "react";

import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

interface IHeroListProps {
  publisher: string;
}

export const HeroList: React.FC<IHeroListProps> = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
