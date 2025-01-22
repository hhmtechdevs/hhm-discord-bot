import { Client, CommandInteraction } from "discord.js"

export interface Command {
  data: {
    name: string
    description: string
    options?: {
      name: string
      type: number
      description: string
      required: boolean
    }[]
  },

  execute: (interaction: CommandInteraction, client?: Client) => Promise<void>
}

