# Pokedex CLI (TypeScript)

A command-line Pokedex built in TypeScript.

This project was created as part of the Boot.dev “Build a Pokedex” project and uses the PokeAPI as its data source. It lets you browse Pokémon location areas, explore encounters, catch Pokémon, inspect the ones you have caught, and list your Pokédex entries from an interactive REPL in the terminal.

## Motivation

This project was built to practice core backend and CLI development concepts in TypeScript:

- working with external HTTP APIs
- structuring a small multi-file Node.js application
- building a REPL-style command-line interface
- handling state across commands
- introducing simple in-memory caching for repeated API calls

The goal was not to build a full game, but a clean, interactive terminal application that demonstrates solid TypeScript fundamentals and good project structure.

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/simddev/dex.git
cd dex
```

### 2. Use the project Node version

If you use `nvm`, the repository includes an `.nvmrc` file, so you can run:

```bash
nvm use
```

If that version is not installed yet:

```bash
nvm install
nvm use
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the app

```bash
npm run dev
```

Available scripts:

```bash
npm run dev
npm run build
npm run start
npm run test
```

## Usage

Once started, the application opens an interactive prompt:

```text
Pokedex >
```

Available commands:

### `help`

Displays all available commands.

### `exit`

Exits the Pokedex CLI.

### `map`

Shows the next page of Pokémon location areas.

### `mapb`

Shows the previous page of location areas.

### `explore <location-area-name>`

Lists the Pokémon that can be encountered in a given area.

Example:

```text
Pokedex > explore pastoria-city-area
```

### `catch <pokemon-name>`

Attempts to catch a Pokémon.

Example:

```text
Pokedex > catch pikachu
```

### `inspect <pokemon-name>`

Displays detailed information for a Pokémon you have already caught.

### `pokedex`

Lists all Pokémon caught in the current session.

Example session:

```text
Pokedex > help
Pokedex > map
Pokedex > explore pastoria-city-area
Pokedex > catch pidgey
Pokedex > inspect pidgey
Pokedex > pokedex
```

## Contributing

Contributions, suggestions, and improvements are welcome.

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the tests
5. Open a pull request

Example workflow:

```bash
git checkout -b feature/improve-readme
npm test
git commit -m "Improve README"
git push origin feature/improve-readme
```

When contributing, try to keep the project simple, readable, and aligned with the CLI-first nature of the application.
