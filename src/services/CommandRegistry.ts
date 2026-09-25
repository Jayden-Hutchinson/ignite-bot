import { Command } from "../commands/Command.js";
import helpCommand from "../commands/helpCommand.js";

export class CommandRegistry {
  readonly commands: Command[];
  readonly commandMap: Map<string, Command>;

  constructor(commands: Command[]) {
    this.commands = commands;
    this.commandMap = new Map(
      commands.map((command) => [command.name, command]),
    );
    this.commandMap.set(helpCommand.name, helpCommand);
  }

  public get(name: string) {
    return this.commandMap.get(name);
  }

  public toString(): string {
    return this.commands
      .map((command) => {
        return `**${command.name}** - ${command.description}`;
      })
      .join("\n");
  }
}
