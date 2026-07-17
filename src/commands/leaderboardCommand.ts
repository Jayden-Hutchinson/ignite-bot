import { Message } from "discord.js";
import { Command } from "../types/command.js";

export default {
  name: "!leaderboard",
  description: "displays the current leaderboard",
  execute: async function (message: Message): Promise<void> {
    await message.reply("Leaderboard:");
  },
} satisfies Command;
