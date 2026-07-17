import { Client } from "discord.js";
import { events } from "../events/events.js";

export class EventBinder {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  register() {
    for (const event of events) {
      if (event.once) {
        this.client.once(event.name, (...args) => event.execute(...args));
      } else {
        this.client.on(event.name, (...args) => event.execute(...args));
      }
    }
  }
}
