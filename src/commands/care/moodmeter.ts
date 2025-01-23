import { CommandInteraction, } from 'discord.js'
import { Command } from '../../typings/Command'

const ping: Command = {
  data: {
    name: 'mood',
    description: 'rate your mood',
  },
  execute: async (interaction: CommandInteraction) => {
    const reply = "Good Morning Afternoon Evening. How are we all doing on scale of 1-10? 10 being good. @here"
    await interaction.reply(reply)
  },
}

export default ping
