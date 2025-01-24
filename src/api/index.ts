import { encouragements } from "./staticdata//encouragements.json"
import { roasts } from "./staticdata/roasts.json"

const getEncouragement = async (): Promise<string> => {
  return encouragements[Math.floor(Math.random() * encouragements.length)]
}

const getRoast = async (): Promise<string> => {
  return roasts[Math.floor(Math.random() * roasts.length)]
}

export const API = {
  getEncouragement,
  getRoast
}
