import { EmbedBuilder, Message } from "discord.js";

import { Command, CommandType } from "./Command.js";
import { commands } from "./commands.js";

export default {
  name: "help",
  description: "Displays this message",
  type: CommandType.General,
  execute: async function (message: Message): Promise<void> {
    const commandsByType = new Map<CommandType, Command[]>();
    for (const command of commands) {
      const group = commandsByType.get(command.type) ?? [];
      group.push(command);
      commandsByType.set(command.type, group);
    }

    const group = commandsByType.get(this.type) ?? [];
    group.push(this);
    commandsByType.set(this.type, group);

    const embed = new EmbedBuilder()
      .setTitle("Ignite Commands")
      .setDescription("Here are the available commands:");
    for (const [type, commands] of commandsByType) {
      embed.addFields(
        {
          name: type,
          value: commands
            .map((command) => `**${command.name}** - ${command.description}`)
            .join("\n"),
        },
        { name: "\u200B", value: "" },
      );
    }

    // .addFields({
    //   name: "General",
    //   value: [
    //     `**${this.name}** - ${this.description}`,
    //     displayCommands(),
    //   ].join("\n"),
    // });

    await message.reply({
      embeds: [embed],
    });
  },
} satisfies Command;
