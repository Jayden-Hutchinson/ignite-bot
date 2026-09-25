import { Message } from "discord.js";

export enum CommandType {
  General = "General",
  Community = "Community",
}

export type Command = {
  name: string;
  description: string;
  type: CommandType;
  execute(message: Message): Promise<void>;
};
