import { Events, Message } from "discord.js";
import { Event } from "./event.js";
import { commandMap } from "../commands/commandMap.js";

export default {
  name: Events.MessageCreate,
  once: false,

  async execute(message: Message) {
    if (message.author.bot) {
      return;
    }

    const guildId = message.guildId;
    if (!guildId) {
      return;
    }

    const command = commandMap.get(message.content);
    if (!command) {
      console.log(`Command ${message.content} not available`);
      const errorMessage = `${message.content} is not a command.

**!help** for a list of commands!`;

      message.reply(errorMessage);
      return;
    }

    command.execute(message);
  },
} satisfies Event<Events.MessageCreate>;
