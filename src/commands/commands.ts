import { Command } from "./command.js";
import leaderboardCommand from "./leaderboardCommand.js";
import pingCommand from "./pingCommand.js";
import socialsCommand from "./socialsCommand.js";

const commandPrefix = "!";

export const commands: Command[] = [
  socialsCommand,
  leaderboardCommand,
  pingCommand,
];

export function addPrefix(command: Command) {
  return `${commandPrefix}${command.name}`;
}

export function displayCommands() {
  return commands
    .map((command) => {
      return `**${command.name}** - ${command.description}`;
    })
    .join("\n");
}
