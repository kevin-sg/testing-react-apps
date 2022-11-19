import { HeroList } from "../components";

export const MarvelPage: React.FC = () => {
  return (
    <>
      <h1 data-testid="test-h1">Marvel Comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
