import { Events, Message } from "discord.js";
import { Event } from "./event.js";
import commandMap from "../commands/commands.js";

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
      return;
    }

    command.execute(message);
  },
} satisfies Event<Events.MessageCreate>;
