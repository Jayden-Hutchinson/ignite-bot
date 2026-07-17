import { EmbedBuilder, Message, MessageFlags } from "discord.js";
import { Command } from "./command.js";

const socials = [
  {
    name: "Website",
    url: "https://ignitefitness.ca",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/miguel.hombrebueno",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/miguelhombre.ignitefit",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@miguelhombre.ignitefit?xmt=AQG0M1PkN-ZysSGVVc5UL0dCrVuN3pPmu253jbHOELoGZGc",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@miguelhombre.ignitefit",
  },
];

export default {
  name: "socials",
  description: "Display a list of all ignite fitness social media links",
  execute: async function (message: Message): Promise<void> {
    //     const socialsMessage = `
    // ${socials
    //   .map((social) => {
    //     return `
    // **${social.name}**
    // [link](${social.url})`;
    //   })
    //   .join("\n")}`;

    //     await message.reply({
    //       content: socialsMessage,
    //       flags: MessageFlags.SuppressEmbeds,
    //     });

    const embed = new EmbedBuilder()
      .setTitle("Ignite Socials")
      .setDescription("Here are the Ignite Fitness Socials:")
      .addFields({
        name: "",
        value: [
          socials
            .map((social) => {
              return `[**${social.name}**](${social.url})`;
            })
            .join("\n"),
        ].join("\n"),
      });

    await message.reply({
      embeds: [embed],
    });
  },
} satisfies Command;
