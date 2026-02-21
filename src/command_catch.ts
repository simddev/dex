import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokemonName = args[0];

  if (!pokemonName) {
    console.log("Please provide a pokemon name");
    return;
  }

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

  // Higher base_experience => lower catch chance
  const catchChance = 1 / (1 + pokemon.base_experience / 50);
  const caught = Math.random() < catchChance;

  if (caught) {
    console.log(`${pokemon.name} was caught!`);
    state.pokedex[pokemon.name] = pokemon;
    console.log("You may now inspect it with the inspect command.");
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}
