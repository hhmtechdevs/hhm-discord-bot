import dotenv from 'dotenv'

dotenv.config()

const {
  DISCORD_BOT_TOKEN = "",
  CLIENT_ID = "",
  GUILD_ID = ""
} = process.env

enum ENotificationColors {
  PRIMARY_COLOR = "#0099ff"
}

const SOCIAL_LINKS = {
  WEBSITE: '**Website: [Click to Visit](https://hhm-front-end.vercel.app/)**',
  REDDIT: `**Reddit: [Click to Visit](https://www.reddit.com/r/healingheartsminds/)**`,
  INSTAGRAM: '**Instagram: [Click to Visit](https://www.instagram.com/casthhm/)**',
  TIKTOK: '**TikTok: [Click to Visit](https://www.tiktok.com/@healingheartsminds)**',
}

export const CONFIG = {
  DISCORD_BOT_TOKEN,
  CLIENT_ID,
  GUILD_ID,
  ENotificationColors,
  SOCIAL_LINKS
}
