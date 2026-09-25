import assert from "node:assert/strict";
import test from "node:test";

import { CommandHandler } from "../src/handlers/CommandHandler.js";
import { Message } from "discord.js";
import { Command, CommandType } from "../src/commands/Command.js";

const commands = [
  {
    name: "ping",
    description: "",
    type: CommandType.General,
    execute: function (message: Message): Promise<void> {
      return new Promise<void>((resolve) => {
        resolve();
      });
    },
  } satisfies Command,
];

const commandHandler = new CommandHandler(commands);

const message = {
  content: "",
  reply: async () => {},
  client: {
    user: {
      username: "Ignite",
    },
  },
} as unknown as Message;

test("CommandHandler handle", async (t) => {
  await t.test("handle command", async () => {
    message.content = "!ping";

    const result = await commandHandler.handle(message);

    assert.equal(result, true);
  });

  await t.test("handle command with leading white space", async () => {
    message.content = "       !ping";

    const result = await commandHandler.handle(message);

    assert.equal(result, true);
  });

  await t.test("whitespace after '!' is not a command", async () => {
    message.content = "!  ping";

    const result = await commandHandler.handle(message);

    assert.equal(result, false);
  });

  await t.test("doesn't handle normal messages", async () => {
    message.content = "hello";

    const result = await commandHandler.handle(message);

    assert.equal(result, false);
  });

  await t.test("command doesn't exist", async () => {
    message.content = "!thing";

    const result = await commandHandler.handle(message);

    assert.equal(result, true);
  });
});
