import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

export function startREPL(state: State): void {
  state.rl.prompt();

  state.rl.on("line", async (line: string) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    const args = words.slice(1);

    try {
      await command.callback(state, ...args);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(String(err));
      }
    }

    state.rl.prompt();
  });
}
