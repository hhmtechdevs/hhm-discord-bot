import { REST, Routes } from 'discord.js'
import { loadCommands } from './utils/loadCommands'
import { Command } from './typings/Command'
import { CLIENT_ID, DISCORD_BOT_TOKEN, GUILD_ID } from './config';

const commands = new Map<string, Command>();
loadCommands(commands)

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(DISCORD_BOT_TOKEN);

// and deploy your commands!
(async () => {
  try {
    console.log(`Started refreshing ${commands.size} application (/) commands.`);
    console.log(...commands)
    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
