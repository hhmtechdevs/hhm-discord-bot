import { CommandInteraction, } from 'discord.js'
import { Command } from '../../typings/Command'

const feel: Command = {
  data: {
    name: 'feel',
    description: 'the feel wheel',
  },
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`Name 2 or 3 feelings that closely describe how you're currently feeling from the good old Feel Wheel: https://www.reddit.com/r/healingheartsminds/s/7xyV7EcSb5`)
  },
}

export default feel
