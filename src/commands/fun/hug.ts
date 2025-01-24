import { CommandInteraction } from 'discord.js'
import { Command } from '../../typings/Command'

const hug: Command = {
  data: {
    name: 'hug',
    description: 'Sends a hug gif',
    options: [
      {
        name: 'user',
        type: 3,
        description: 'a user you want to give a hug',
        required: false
      }
    ]
  },

  execute: async (interaction: CommandInteraction) => {
    const sender = interaction.user.username
    const reciever = interaction.options.get('user')
    await interaction.reply({
      content: `${sender} hugged ${reciever}`,
      allowedMentions: { parse: ['users'] }
    })
  },
}

export default hug
