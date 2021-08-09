import { createInterface } from "readline";


import { runner } from "./runner";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (): Promise<null> =>
    new Promise((resolve: Function) => {
        rl.question("> ", (answer: string) => {
            const result = runner(answer);

            if (result) {
                console.log(`Result: ${result}`);
            }
            resolve();
        });
    });

async function app(): Promise<null> {
    console.log('Введите выражение: ')
    while (true) {
        await question();
    }
}

app();