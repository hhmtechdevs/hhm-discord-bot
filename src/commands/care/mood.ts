import { CommandInteraction, } from 'discord.js'
import { Command } from '../../typings/Command'

const mood: Command = {
  data: {
    name: 'mood',
    description: 'rate your mood',
    options: [
      {
        name: 'rating',
        type: 3,
        description: 'Your current mood rating',
        required: true
      }
    ]
  },
  execute: async (interaction: CommandInteraction) => {
    const mood = interaction.options.get('rating')
    await interaction.reply(`Your current mood rating is: ${mood?.value}`)
  },
}

export default mood
