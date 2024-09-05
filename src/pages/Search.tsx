import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import Wrapper from "../sections/Wrapper";

function Search() {
  const dispatch = useAppDispatch();
  const { allPokemon } = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonId));
    }
  }, [allPokemon, dispatch]);

  return <div>Search</div>;
}
export default Wrapper(Search);
