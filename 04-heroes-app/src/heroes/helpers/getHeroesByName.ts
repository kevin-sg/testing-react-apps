import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  const isValidName = name.toLocaleLowerCase().trim();

  if (isValidName.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(isValidName));
};
