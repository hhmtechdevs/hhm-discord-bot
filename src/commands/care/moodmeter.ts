import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder, } from 'discord.js'
import { Command } from '../../typings/Command'
import { CONFIG } from '../../config'

const moodmeter: Command = {
  data: {
    name: 'moodmeter',
    description: 'rate your mood',
  },
  execute: async (interaction: CommandInteraction) => {
    const embed = new EmbedBuilder()
      .setTitle("Mood Meter")
      .setColor(CONFIG.ENotificationColors.PRIMARY_COLOR)
      .setDescription("Good Morning Afternoon Evening. How are we all doing on scale of 1-10? 10 being good.")

    const button = new ButtonBuilder()
      .setCustomId('moodmeter_response')
      .setLabel('Respond')
      .setStyle(ButtonStyle.Primary)

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button)

    await interaction.reply({
      content: '@here',
      embeds: [embed],
      components: [row],
      allowedMentions: { parse: ['everyone'] }
    })
  },
}

export default moodmeter
