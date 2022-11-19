import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getHeroById } from "../helpers";

export const HeroPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id as string), [id]);

  const onNavigateBack = () => navigate(-1);

  const heroImageUrl = `../src/assets/heroes/${id}.jpg`;

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          data-testid="test-img-hero"
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3 data-testid="test-hero-name">{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego:</b> {hero.alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {hero.publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance:</b> {hero.first_appearance}{" "}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button data-testid="on-button-click" className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
