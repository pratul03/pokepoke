import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/pokemonTypes";

export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number;
            types: { type: genericPokemonType }[];
          };
        } = await axios.get(pokemon.url);
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: {
              image: pokemonTypes[name as keyof typeof pokemonTypes].image,
              strength:
                pokemonTypes[name as keyof typeof pokemonTypes].strength,
              weaknesses:
                pokemonTypes[name as keyof typeof pokemonTypes].weakness, // Correct the field name here
              resistance:
                pokemonTypes[name as keyof typeof pokemonTypes].resistance,
              vulnerable:
                pokemonTypes[name as keyof typeof pokemonTypes].vulnerable,
            },
          })
        );
        let image: string = images[data.id as keyof typeof images];
        if (!image) {
          image = defaultImages[data.id as keyof typeof defaultImages];
        }
        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
      }
      return pokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
