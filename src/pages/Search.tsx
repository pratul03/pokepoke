import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
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
    }
  }, [allPokemon]);

  return <div>Search</div>;
}
export default Wrapper(Search);
