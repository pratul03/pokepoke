import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { types } from "util";

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            data: {
              id: number;
              types:{type: generatedPokemonType}[];
          };
          } = await axios.get (pokemon.url);
        
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => {
            [name]:pokemonTypes[name]
          });
        let image: string = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }

        if (image) {
          pokemonsData.push({
            name: [pokemon.name],
            id: data.id,
            image,
            types,
          })
        }
        console.log();

      
      }
    } catch (error) {
      console.log(error);
    }
  }
);
