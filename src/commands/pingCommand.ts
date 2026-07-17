import { EmbedBuilder, Message } from "discord.js";
import { Command } from "./command.js";

export default {
  name: "ping",
  description: "Ping the discord bot for connection info",
  execute: async function (message: Message): Promise<void> {
    const start = Date.now();

    const botTag = message.client.user?.tag;
    const heartbeat = message.client.ws.ping;

    // make a request to the api to test the latency
    await message.client.rest.get("/users/@me");

    const latencyMS = Date.now() - start;

    const embed = new EmbedBuilder().setTitle(botTag).addFields(
      {
        name: "Pong!",
        value: "",
      },
      {
        name: "",
        value: `:heartpulse: Heartbeat: **${heartbeat}** ms`,
      },
      {
        name: "",
        value: `:stopwatch: API: **${latencyMS}** ms`,
      },
    );

    await message.reply({ embeds: [embed] });
  },
} satisfies Command;
