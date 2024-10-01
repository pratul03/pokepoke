import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonsData } from "../app/reducers/getPokemonsData";
import Wrapper from "../sections/Wrapper";
import PokemonCardGrid from "../components/PokemonCardGrid";

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonId));
    }
  }, [allPokemon, dispatch]);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="pokemon-searchBar"
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  );
}
export default Wrapper(Search);
