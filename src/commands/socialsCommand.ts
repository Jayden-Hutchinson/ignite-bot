import { EmbedBuilder, Message } from "discord.js";
import { Command } from "./command.js";

const socials = [
  {
    name: ":globe_with_meridians: Website",
    value: `[ignitefitness.ca](https://ignitefitness.ca)`,
  },
  {
    name: ":blue_book: Facebook",
    value: `[miguel.hombrebueno](https://www.facebook.com/miguel.hombrebueno)`,
  },
  {
    name: ":camera: Instagram",
    value: `[@miguelhombre.ignitefit](https://www.instagram.com/miguelhombre.ignitefit)`,
  },
  {
    name: ":thread: Threads",
    value: `[@miguelhombre.ignitefit](https://www.threads.com/@miguelhombre.ignitefit?xmt=AQG0M1PkN-ZysSGVVc5UL0dCrVuN3pPmu253jbHOELoGZGc)`,
  },
  {
    name: ":musical_note: TikTok",
    value: `[@miguelhombre.ignitefit](https://www.tiktok.com/@miguelhombre.ignitefit)`,
  },
];

export default {
  name: "socials",
  description: "Display a list of all ignite fitness social media links",
  execute: async function (message: Message): Promise<void> {
    const embed = new EmbedBuilder()
      .setTitle("Socials")
      .setDescription("Follow us on social media!")
      .addFields(socials);

    await message.reply({
      embeds: [embed],
    });
  },
} satisfies Command;
