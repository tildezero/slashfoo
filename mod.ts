import * as slash from "https://code.harmony.rocks/v2.5.1/deploy.ts"
import { commands } from "./commands.ts"

slash.init({ env: true })


const cmds = await slash.commands.all()
slash.commands.bulkEdit(commands)

slash.handle('ping', (d: slash.ApplicationCommandInteraction) => d.reply("pong"))

slash.handle("add", (d: slash.ApplicationCommandInteraction) => {
  d.reply(`${d.option<number>("n1") + d.option<number>("n2")}`)
})

slash.handle("suggest", async (d: slash.ApplicationCommandInteraction) => {
    if (d.guild?.id !== "733508936216477706") return d.reply("no");
    console.log("checkpoint 1")
    const em = new slash.Embed({
        title: "Suggestion", 
        description: d.option<string>("suggestion")
    })
    em.setAuthor({
        name: `${d.user.toString()} (${d.member?.nick})`,
        icon_url: d.user.avatarURL() 
    })
    const msg = await slash.client.client?.channels.sendMessage("735619559318487123", {embeds: [em]})
    await msg?.startThread({name: "discuss", autoArchiveDuration: 10080})
    await msg?.addReaction("👍");
    await msg?.addReaction("👎");
    await d.reply("done!")
})

slash.handle("urban", async (d: slash.ApplicationCommandInteraction) => {
    const q = encodeURIComponent(d.option<string>("word"))
    const req = await fetch(`https://api.urbandictionary.com/v0/define?term=${q}`)
    const res = await req.json()
    d.reply(res.list[0].definition)
})

slash.handle("covid", async (d: slash.ApplicationCommandInteraction) => {
    const i = await d.defer()
    const req = await fetch("https://covid-ss.vercel.app")
    const img = await req.arrayBuffer()
    const bytes = new Uint8Array(img)
    const att = new slash.MessageAttachment("covid.png", bytes, "a picture with things in it")
    await i.editResponse({ files: [att] })

})

console.log("bot running")
console.log('-- commands --')
cmds.forEach(cmd => console.log(cmd.name))
