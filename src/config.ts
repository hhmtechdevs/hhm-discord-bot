import dotenv from 'dotenv'

dotenv.config()

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || ''
export const CLIENT_ID = process.env.CLIENT_ID || ''
export const GUILD_ID = process.env.GUILD_ID || ''

export const THEME_COLOR = 0x0099ff
