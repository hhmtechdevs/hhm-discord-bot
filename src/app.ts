import { Client, GatewayIntentBits, Interaction } from 'discord.js'
import { Command } from './typings/Command'

import './registerCommands'
import { loadCommands } from './utils/loadCommands'
import { DISCORD_BOT_TOKEN } from './config'

const startBot = () => {
  const app = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers
    ]
  })

  const commands = new Map<string, Command>()
  loadCommands(commands)

  app.on('ready', () => {
    console.log(`Logged in as ${app.user?.tag}`)
  })

  app.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction
    const command = commands.get(commandName)

    if (!command) {
      console.error(`No command matching ${commandName}`)
      return;
    }

    try {
      await command.execute(interaction, app)
    } catch (error) {
      console.error(error)
      await interaction.reply('There was some error')
    }
  })

  app.login(DISCORD_BOT_TOKEN)
}

startBot()
