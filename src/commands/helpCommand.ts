import { EmbedBuilder, Message } from "discord.js";

import { Command } from "./command.js";
import { displayCommands } from "./commands.js";

export default {
  name: "help",
  description: "Displays this message",
  execute: async function (message: Message): Promise<void> {
    const embed = new EmbedBuilder()
      .setTitle("Ignite Commands")
      .setDescription("Here are the available commands:")
      .addFields({
        name: "General",
        value: [
          `**${this.name}** - ${this.description}`,
          displayCommands(),
        ].join("\n"),
      });

    await message.reply({
      embeds: [embed],
    });
  },
} satisfies Command;
