import dotenv from "dotenv";
import { Client, Events, GatewayIntentBits, Message } from "discord.js";

import commandMap from "./commands/commands.js";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, async (message: Message): Promise<void> => {
  if (message.author.bot) {
    return;
  }

  const guildId = message.guildId;
  if (!guildId) {
    return;
  }

  const command = commandMap.get(message.content);

  command.execute(message);
});

client.login(BOT_TOKEN);
