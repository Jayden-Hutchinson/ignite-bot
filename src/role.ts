import { Guild, Client, GuildMember } from "discord.js";

export async function addRoleToMember(
  client: Client,
  guildId: string,
  userId: string,
  roleId: string,
): Promise<void> {
  try {
    const guild: Guild = await client.guilds.fetch(guildId);

    const member: GuildMember = await guild.members.fetch(userId);

    await member.roles.add(roleId);

    console.log(`Successfully added role ${roleId} to ${member.user.tag}`);
  } catch (error) {
    console.log("Error adding role:", error);
  }
}

export async function removeRoleFromMember(
  client: Client,
  guildId: string,
  userId: string,
  roleId: string,
): Promise<void> {
  try {
    const guild: Guild = await client.guilds.fetch(guildId);

    const member: GuildMember = await guild.members.fetch(userId);

    await member.roles.remove(roleId);

    console.log(`Successfully removed role ${roleId} from ${member.user.tag}`);
    
  } catch (error) {
    console.log("Error adding role:", error);
  }
}
