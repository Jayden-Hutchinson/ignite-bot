import helpCommand from "./helpCommand.js";
import { commands, addPrefix } from "./commands.js";

export const commandMap = new Map(
  commands.map((command) => [`${addPrefix(command)}`, command]),
);

commandMap.set(`${addPrefix(helpCommand)}`, helpCommand);
