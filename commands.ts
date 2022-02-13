import * as deploy from "https://code.harmony.rocks/v2.5.1/deploy.ts"


export const commands: deploy.ApplicationCommandPartial[] = [
    {
        name: "ping",
        description: "pongs",
    },
    {
        name: "add",
        description: "adds two numbers"
    }
]