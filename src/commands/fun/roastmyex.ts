import { CommandInteraction } from 'discord.js'
import { roasts } from "../../data/roasts.json"
import { Command } from '../../typings/Command'

//TODO: Add traits as an option to make customized roasts
const roastmyex: Command = {
  data: {
    name: 'roastmyex',
    description: 'Sends a random message to roast your ex',
  },

  execute: async (interaction: CommandInteraction) => {
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)]
    await interaction.reply(randomRoast)
  },
}

export default roastmyex
