const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function antecessor_sucessor() {
  numero = parseInt(prompt('Digite um número: ' ));

  antecessor = numero - 1;
  sucessor = numero + 1;

  console.log(`O antecessor de ${numero} é ${antecessor}`);
  console.log(`O sucessor de ${numero} é ${sucessor}`);
  readline.question("Digite Enter para sair ... ");
}

antecessor_sucessor();