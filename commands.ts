import * as deploy from "https://code.harmony.rocks/v2.5.1/deploy.ts"


export const commands: deploy.ApplicationCommandPartial[] = [
    {
        name: "ping",
        description: "pongs",
    },
    {
        name: "add",
        description: "adds two numbers",
        options: [
            {
                name: "number1",
                description: "the first number",
                type: "INTEGER",
                required: true
            },
            {
                name: "number2",
                description: "the second number",
                type: "INTEGER",
                required: true
            }
        ]
    }
]