import { CommandInteraction, EmbedBuilder, } from 'discord.js'
import { Command } from '../../typings/Command'
import { CONFIG } from '../../config'

const links: Command = {
  data: {
    name: 'links',
    description: 'community links',
  },
  execute: async (interaction: CommandInteraction) => {
    let linksString = ''

    Object.entries(CONFIG.SOCIAL_LINKS).forEach((link) => linksString += `${link[1]}\n`)

    const embed = new EmbedBuilder().setColor(CONFIG.ENotificationColors.PRIMARY_COLOR)
      .addFields({ name: 'Links and Resources', value: linksString })

    await interaction.reply({ embeds: [embed] })
  },
}

export default links
