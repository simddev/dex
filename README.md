# Pokedex CLI (TypeScript)

A command-line Pokedex built in TypeScript as part of the Boot.dev "Build a Pokedex" project.

This app lets you explore Pokémon location areas, inspect the Pokémon found there, catch Pokémon, and keep track of your personal Pokedex — all from a REPL (interactive terminal prompt).

## Features

- REPL-based CLI (`Pokedex >`)
- `help` and `exit` commands
- `map` / `mapb` pagination through Pokémon world location areas
- `explore <area>` to list Pokémon in a location area
- `catch <pokemon>` with catch chance based on base experience
- `inspect <pokemon>` to see details of caught Pokémon
- `pokedex` to list all caught Pokémon
- In-memory caching for PokeAPI responses (faster repeated requests)

## Tech Stack

- TypeScript
- Node.js
- Vitest (tests)
- PokeAPI (data source)
