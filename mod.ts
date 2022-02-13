import * as slash from "https://code.harmony.rocks/v2.5.1/deploy.ts"
import { commands } from "./commands.ts"

slash.init({ env: true })

const cmds = await slash.commands.all()
if (cmds.size !== commands.length) {
  slash.commands.bulkEdit(commands)
}

slash.handle('ping', (d: slash.ApplicationCommandInteraction) => d.reply("pong"))

slash.handle("add", (d: slash.ApplicationCommandInteraction) => {
  d.reply(`${d.option<number>("number1") + d.option<number>("number2")}`)
})

console.log("bot running")
