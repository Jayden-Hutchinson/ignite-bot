import { Message } from "discord.js";
import { Parser } from "./Parser.js";

type ParsedCommand = {
  name: string;
  args: string[];
};

export class CommandParser implements Parser {
  private static readonly COMMAND_PREFIX = "!";

  parse(message: Message): ParsedCommand | null {
    const content = message.content.trimStart();

    if (!this.isCommand(content)) {
      return null;
    }

    const tokens = content
      .slice(CommandParser.COMMAND_PREFIX.length)
      .split(/\s+/);

    return {
      name: tokens.shift()!.toLowerCase(),
      args: tokens,
    };
  }

  private isCommand(content: string): boolean {
    return (
      content.startsWith(CommandParser.COMMAND_PREFIX) &&
      content.length > 1 &&
      !/\s/.test(content[1])
    );
  }
}
