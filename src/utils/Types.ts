export interface AppTypeInitialState {
  toasts: string[];
}
export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonType[];
  compareQueue: generatedPokemonType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    weaknesses: string[];
    strength: string[];
    vulnerable: string[];
  };
}

export interface usersPokemonsType extends generatedPokemonType {
  firebaseId?: string;
}
