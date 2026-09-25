import { Message } from "discord.js";

import { Command } from "../commands/Command.js";
import { Handler } from "./Handler.js";
import { CommandParser } from "../parsers/CommandParser.js";
import { CommandRegistry } from "../services/CommandRegistry.js";

export class CommandHandler implements Handler {
  private commandParser;
  private commandRegistry;

  constructor(commands: Command[]) {
    this.commandParser = new CommandParser();
    this.commandRegistry = new CommandRegistry(commands);
  }

  public async handle(message: Message): Promise<boolean> {
    const parsedCommand = this.commandParser.parse(message);
    if (!parsedCommand) {
      return false;
    }

    const command = this.commandRegistry.get(parsedCommand.name);

    if (!command) {
      console.log(`${message.content} is not a command.`);

      const errorMessage = `
${message.content} is not a command.

**!help** for a list of commands!`;

      await message.reply(errorMessage);
      return true;
    }

    await command.execute(message);
    return true;
  }
}
