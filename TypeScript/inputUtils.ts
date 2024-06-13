const promptSync = require("prompt-sync")();
const readlineSync = require("readline-sync");

export function prompt(question: string): string {
    return promptSync(question) || '';
}

export function pressEnterToExit(): void {
    readlineSync.question("Pressione Enter para sair ... ");
}