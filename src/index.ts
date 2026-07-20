import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

import { EventBinder } from "./bot/EventBinder.js";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

const eventBinder = new EventBinder(client);

eventBinder.register();



client.login(BOT_TOKEN);
