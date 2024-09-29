import { createAsyncThunk } from "@reduxjs/toolkit";
import { genericPokemonType } from "../../utils/Types";
import axios from 'axios';

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const allPokemons:genericPokemonType[] = [];
      for await (const pokemon of pokemons) {
        const { data } = await axios.get(pokemon.url);
        console.log();
        
        allPokemons.push(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
);