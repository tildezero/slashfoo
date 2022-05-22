import * as deploy from "https://code.harmony.rocks/v2.5.1/deploy.ts"


export const commands: deploy.ApplicationCommandPartial[] = [
    {
        name: "suggest",
        description: "make a server suggestion",
        options: [
            {
                name: "suggestion",
                description: "put your suggestion here",
                type: "STRING",
                required: true
            }
        ]
    },
    {
        name: "ping",
        description: "pongs",
    },
    {
        name: "urban",
        description: "urban dictionary",
        options: [
            {
                name: "word",
                description: "the word",
                type: "STRING",
                required: true
            }
        ] 
    },
    {
        name: "add",
        description: "adds two numbers",
        options: [
            {
                name: "n1",
                description: "the first number",
                type: "INTEGER",
                required: true
            },
            {
                name: "n2",
                description: "the second number",
                type: "INTEGER",
                required: true
            }
        ]
    },
    {
        name: "covid",
        description: "covid"
    }
]
