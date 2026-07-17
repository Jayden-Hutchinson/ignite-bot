import leaderboardCommand from "./leaderboardCommand.js";

const commands = [leaderboardCommand];

const commandMap = new Map();

commands.forEach((command) => {
  commandMap.set(command.name, command);
});

export default commandMap;
