import { Message } from "discord.js";
import { Command, CommandType } from "./Command.js";

export default {
  name: "leaderboard",
  description: "Displays the current leaderboard",
  type: CommandType.Community,
  execute: async function (message: Message): Promise<void> {
    await message.reply("Leaderboard:");
  },
} satisfies Command;
