import { CommandInteraction } from 'discord.js'
import { Command } from '../../typings/Command'
import { API } from '../../api'

const encouragement: Command = {
  data: {
    name: 'encouragement',
    description: 'Sends a short encouragement message',
  },

  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(await API.getEncouragement())
  },
}

export default encouragement
