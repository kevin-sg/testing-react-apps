import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString, { ParsedQuery } from "query-string";
import type { FormEvent } from "react";

import { useForm } from "@/hooks/useForm";
import { HeroCard } from "@/heroes/components";
import { getHeroesByName } from "@/heroes/helpers";

export const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [searchParams] = useSearchParams(); // [searchParams, setSearchParams]

  const { q = "" } = Object.fromEntries([...searchParams]);
  // const { q = "" } = queryString.parse(location.search) as ParsedQuery<any>;
  const heroes = getHeroesByName(q as string);

  const showSearch = q?.length === 0;
  const showError = q?.length > 0 && heroes.length === 0;

  const { formState, onInputChange } = useForm({ searchText: q });

  const { searchText } = formState;

  const onSearchSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              data-testid="test-input-value"
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button data-testid="on-submit-click" type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            data-testid="test-alert"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
            role="alert"
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
