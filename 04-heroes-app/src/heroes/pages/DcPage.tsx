import { HeroList } from "../components";

export const DcPage: React.FC = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
};
