import { Message } from "discord.js";

export class MessageParser {
  private static readonly COMMAND_PREFIX = "!";

  public static parse(message: Message): void {}

  public static isCommand(message: Message): boolean {
    const content = message.content.trimStart();
    return content.startsWith(MessageParser.COMMAND_PREFIX);
  }
}
