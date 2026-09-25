import { ActivityType, Client, Events } from "discord.js";
import { Event } from "./Event.js";

export default {
  name: Events.ClientReady,
  once: true,

  execute: function (client: Client<true>): Promise<void> | void {
    client.user.setPresence({
      status: "online",
      activities: [{ name: "!help", type: ActivityType.Listening }],
    });
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
} satisfies Event<Events.ClientReady>;
