import { Message } from "discord.js";
import { Command } from "./command.js";

export default {
  name: "leaderboard",
  description: "Displays the current leaderboard",
  execute: async function (message: Message): Promise<void> {
    await message.reply("Leaderboard:");
  },
} satisfies Command;
