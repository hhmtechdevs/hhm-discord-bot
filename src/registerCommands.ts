import { REST, Routes } from 'discord.js'
import { loadCommands } from './utils/loadCommands'
import { Command } from './typings/Command'
import { CONFIG } from './config';

const commands: Command[] = []
loadCommands(commands)

const rest = new REST().setToken(CONFIG.DISCORD_BOT_TOKEN);

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const data: any = await rest.put(
      Routes.applicationGuildCommands(CONFIG.CLIENT_ID, CONFIG.GUILD_ID),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
