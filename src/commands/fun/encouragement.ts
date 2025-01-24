import { CommandInteraction } from 'discord.js'
import { encouragements } from "../../data/encouragements.json"
import { Command } from '../../typings/Command'

const encouragement: Command = {
  data: {
    name: 'encouragement',
    description: 'Sends a random message to roast your ex',
  },

  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(encouragements[Math.floor(Math.random() * encouragements.length)])
  },
}

export default encouragement
