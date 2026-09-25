import { Command } from "./Command.js";
import leaderboardCommand from "./leaderboardCommand.js";
import pingCommand from "./pingCommand.js";
import socialsCommand from "./socialsCommand.js";

export const commands: Command[] = [
  pingCommand,
  socialsCommand,
  leaderboardCommand,
];

export function displayCommands() {
  return commands
    .map((command) => {
      return `**${command.name}** - ${command.description}`;
    })
    .join("\n");
}
