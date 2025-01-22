import { CommandInteraction } from 'discord.js'
import { Command } from '../../typings/Command'

const ping: Command = {
  data: {
    name: 'ping',
    description: 'ping the bot'
  },
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply('Pong!')
  },
}

export default ping
