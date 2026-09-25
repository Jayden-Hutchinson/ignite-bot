import assert from "node:assert/strict";
import test from "node:test";

import { CommandParser } from "../src/parsers/CommandParser.js";
import { Message } from "discord.js";

const commandParser = new CommandParser();

test("CommandParser parse", async (t) => {
  await t.test("recognize command", () => {
    const message = { content: "!ping" } as Message;

    assert.deepStrictEqual(commandParser.parse(message), {
      name: "ping",
      args: [],
    });
  });

  await t.test("leading whitespace", () => {
    const message = { content: "     !ping" } as Message;
    assert.deepStrictEqual(commandParser.parse(message), {
      name: "ping",
      args: [],
    });
  });

  await t.test("ignores normal messages", () => {
    const message = { content: "hello" } as Message;
    assert.deepStrictEqual(commandParser.parse(message), null);
  });

  await t.test("space after ! ignores command", () => {
    const message = { content: "! ping" } as Message;
    assert.deepStrictEqual(commandParser.parse(message), null);
  });

  await t.test("! is ignored", () => {
    const message = { content: "!" } as Message;
    assert.deepStrictEqual(commandParser.parse(message), null);
  });
});
