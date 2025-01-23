import { CommandInteraction, EmbedBuilder, } from 'discord.js'
import { Command } from '../../typings/Command'

const feel: Command = {
  data: {
    name: 'feel',
    description: 'the feel wheel',
  },
  execute: async (interaction: CommandInteraction) => {
    const embed = new EmbedBuilder().setColor(0x0099ff).setTitle('The Feel Wheel').setDescription(`Name 2 or 3 feelings that closely describe how you're currently feeling from the good old Feel Wheel:`).setImage('https://i.redd.it/hfhc3k6g12x91.jpg')

    await interaction.reply({ embeds: [embed] })
  },
}

export default feel
