import { Client, Events } from "discord.js";
import { Event } from "./event.js";

export default {
  name: Events.ClientReady,
  once: true,

  execute: function (client: Client<true>): Promise<void> | void {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
} satisfies Event<Events.ClientReady>;
