# Pokedex CLI (TypeScript)

A command-line Pokedex built in TypeScript as part of the Boot.dev "Build a Pokedex" project.

This app lets you explore Pokémon location areas, inspect the Pokémon found there, catch Pokémon, and keep track of your personal Pokedex \u2014 all from a REPL (interactive terminal prompt).

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

## Setup

### 1) Clone the repository

```bash
git clone <YOUR_REPO_URL>
cd pokedex
```

### 2) Use the correct Node version (recommended)

If you use `nvm`:

```bash
nvm use
```

If you don\u2019t have the version installed yet:

```bash
nvm install
nvm use
```

### 3) Install dependencies

```bash
npm install
```

## Running the App

### Development mode (build + run)

```bash
npm run dev
```

### Build only

```bash
npm run build
```

### Run built version

```bash
npm run start
```

### Run tests

```bash
npm run test
```

## Commands

### `help`
Shows all available commands.

### `exit`
Closes the Pokedex REPL.

### `map`
Displays the next 20 location areas from the PokeAPI.

### `mapb`
Displays the previous 20 location areas.

### `explore <location-area-name>`
Shows Pokémon that can be encountered in a given location area.

Example:

```txt
Pokedex > explore pastoria-city-area
```

### `catch <pokemon-name>`
Attempts to catch a Pokémon. Catch chance is based on the Pokémon's base experience.

Example:

```txt
Pokedex > catch pikachu
```

### `inspect <pokemon-name>`
Displays details for a Pokémon **only if you have caught it**.

Shows:
- Name
- Height
- Weight
- Stats
- Types

### `pokedex`
Lists all Pokémon you have caught in the current session.

## Example REPL Session

```txt
Pokedex > help
Welcome to the Pokedex!
Usage:

help: Displays a help message
exit: Exit the Pokedex
map: Displays the next 20 locations
mapb: Displays the previous 20 locations
explore: Explore a location area
catch: Catch a pokemon
inspect: Inspect a caught pokemon
pokedex: List all caught pokemon

Pokedex > map
canalave-city-area
eterna-city-area
...

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
 ...

Pokedex > catch pidgey
Throwing a Pokeball at pidgey...
pidgey was caught!
You may now inspect it with the inspect command.

Pokedex > inspect pidgey
Name: pidgey
Height: 3
Weight: 18
Stats:
  -hp: 40
  -attack: 45
  -defense: 40
  -special-attack: 35
  -special-defense: 35
  -speed: 56
Types:
  - normal
  - flying

Pokedex > pokedex
Your Pokedex:
 - pidgey
```

## Project Structure

```txt
src/
  main.ts              # app entrypoint
  repl.ts              # REPL loop + input parsing
  state.ts             # shared app state
  commands.ts          # command registry
  command_*.ts         # command handlers
  pokeapi.ts           # PokeAPI client
  pokecache.ts         # in-memory cache with reaping
  *.test.ts            # tests (Vitest)
```

## Notes

- The Pokedex is stored in memory (`State`) and resets when the program exits.
- API responses are cached in memory for faster repeated access.
- This project is intentionally CLI-first (no GUI) to focus on architecture, TypeScript, and HTTP APIs.

## Credits

- [PokeAPI](https://pokeapi.co/) for the Pokémon data
- Boot.dev for the project assignment and course structure
