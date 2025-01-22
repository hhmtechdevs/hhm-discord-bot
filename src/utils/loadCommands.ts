import * as path from 'path'
import * as fs from 'fs'
import { Command } from '../typings/Command'

export const loadCommands = (commands: Command[] | Map<string, Command>) => {
  const folderPath = path.join(__dirname, '../', 'commands')
  const commandFolders = fs.readdirSync(folderPath)

  for (const folder of commandFolders) {
    const commandPath = path.join(folderPath, folder)
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.ts'))
    for (const file of commandFiles) {
      const filePath = path.join(commandPath, file)
      const command = require(filePath).default

      if ('data' in command && 'execute' in command) {
        if (Array.isArray(commands)) {
          commands.push(command.data.toJSON());
        }
        else {
          commands.set(command.data.name, command)
        }
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing required properties`)
      }
    }
  }
}
