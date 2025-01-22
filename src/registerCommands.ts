import { REST, Routes } from 'discord.js'
import { loadCommands } from './utils/loadCommands'
import { Command } from './typings/Command'
import { CLIENT_ID, DISCORD_BOT_TOKEN, GUILD_ID } from './config';

const commands = new Map<string, Command>();
loadCommands(commands)

const rest = new REST().setToken(DISCORD_BOT_TOKEN);

(async () => {
  try {
    console.log(`Started refreshing ${commands.size} application (/) commands.`);
    console.log(...commands)

    const data: any = await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
