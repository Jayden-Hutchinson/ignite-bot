import { Events, Message } from "discord.js";
import { Event } from "./Event.js";
import { CommandHandler } from "../handlers/CommandHandler.js";
import { commands } from "../commands/commands.js";

const handlers = [new CommandHandler(commands)];

export default {
  name: Events.MessageCreate,
  once: false,

  async execute(message: Message) {
    if (message.author.bot) {
      return;
    }

    for (const handler of handlers) {
      if (await handler.handle(message)) {
        break;
      }
    }
  },
} satisfies Event<Events.MessageCreate>;
