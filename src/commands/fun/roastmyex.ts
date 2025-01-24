import { CommandInteraction } from 'discord.js'
import { Command } from '../../typings/Command'
import { API } from '../../api'

//TODO: Add traits as an option to make customized roasts
const roastmyex: Command = {
  data: {
    name: 'roastmyex',
    description: 'Sends a random message to roast your ex',
  },

  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(await API.getRoast())
  },
}

export default roastmyex
