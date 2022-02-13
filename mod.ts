import * as slash from "https://code.harmony.rocks/v2.5.1/deploy.ts"
import { commands } from "./commands.ts"

slash.init({ env: true })

const cmds = await slash.commands.all()
if (cmds.size !== commands.length) {
  slash.commands.bulkEdit(commands)
}

slash.handle('ping', (d: slash.ApplicationCommandInteraction) => d.reply("pong"))

slash.handle("add", (d: slash.ApplicationCommandInteraction) => {
  d.reply(`${d.option<number>("n1") + d.option<number>("n2")}`)
})

slash.handle("covid", async (d: slash.ApplicationCommandInteraction) => {
  const body = JSON.stringify({
    url: "https://view-awesome-table.com/-MGy-B0VX5sZp1jdKNqb/view?filterA=Round%20Rock%20High",
    renderType: "jpeg",
    selector: ".card-content"
  })
  const req = await fetch(`https://PhantomJScloud.com/api/browser/v2/${Deno.env.get("PHANTOM_KEY")}/`, {
    method: "POST",
    body: body
  })
  const b = await req.blob()
  const t = await b.text()
  const att = new slash.MessageAttachment("covid.jpg", b)
  d.respond({content: "covid", files: [att]})
})

console.log("bot running")
