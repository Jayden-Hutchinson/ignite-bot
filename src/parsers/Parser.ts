import { Message } from "discord.js";

export interface Parser {
  parse(message: Message): any | null;
}
